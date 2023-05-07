import { CheckCircleIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Button, CircularProgress, Flex, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const StepSkills = ({ updateObject, handleNext }) => {

    const toast = useToast()
    const [skills, setSkills] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isFullySaved, setIsFullySaved] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/skills')
            .then(response => response.json())
            .then(skills => {
                const options = skills.reduce((acc, skill) => {
                    acc[skill.category] = '';
                    return acc;
                }, {});
                setSelectedOptions(options);
                setSkills(skills);
            })
            .catch(error => console.error(error));
    }, []);

    const handleOptionSelect = (category, option) => {
        setSelectedOptions(prevSelectedOptions => ({
            ...prevSelectedOptions,
            [category]: option,
        }));
    };

    const handleSave = () => {
        const isSaved = Object.values(selectedOptions).every(
            (value) => value !== ''
        );
        setIsFullySaved(isSaved);

        if (isSaved) {
            updateObject('skills', selectedOptions);
            toast({
                title: 'Successfully saved.',
                description: '',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
            setTimeout(() => {
                setIsFullySaved(false);
                handleNext();
            }, 1700);
        } else {
            toast({
                title: 'Empty fields.',
                description: 'You should fill up everything',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Flex w='100%' flexDirection="column" alignItems="center" >

            <Stack w="100%" gap={4}>
                {skills.map(skill => (
                    <Menu key={skill.category} closeOnSelect={false} matchWidth>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            {skill.category}
                        </MenuButton>
                        <Text >
                            {selectedOptions[skill.category] &&
                                <Stack display='flex' flexDirection='row' alignItems='center' justifyContent='cebter' gap={2}>
                                    <CheckCircleIcon color='vd' />
                                    <Text textAlign='center'>{selectedOptions[skill.category]}</Text>
                                </Stack>

                            }
                        </Text>
                        <MenuList >
                            <MenuOptionGroup color='bl' defaultValue='' title='Select one option' type='radio'>
                                {skill.subcategories[0].options.map((option) => (
                                    <MenuItemOption
                                        key={option}
                                        value={option}
                                        onClick={() => handleOptionSelect(skill.category, option)}
                                        isChecked={selectedOptions[skill.category] === option}
                                    >
                                        {option}
                                    </MenuItemOption>
                                ))}
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                ))}

                <Button onClick={handleSave}>Save</Button>
            </Stack>

        </Flex>
    );
};

export default StepSkills;
