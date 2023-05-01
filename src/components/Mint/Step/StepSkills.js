import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Checkbox, CheckboxGroup, CircularProgress, Input, ListItem, Menu, MenuButton, MenuList, Select, Stack, Text, UnorderedList, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';



const StepSkills = ({ updateObject }) => {

    const toast = useToast()
    const [skills, setskills] = useState([])

    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSkillSelect = (event) => {
        const skillName = event.target.value;
        if (event.target.checked) {
            setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skillName]);
        } else {
            setSelectedSkills((prevSelectedSkills) => prevSelectedSkills.filter((name) => name !== skillName));
        }
        console.log(selectedSkills);
    };

    const [isFullySaved, setIsFullySaved] = useState(false);

    useEffect(() => {
        const listSkills = fetch('http://localhost:8000/skills')
            .then(response => response.json())
            .then(skills => {
                setskills(skills)
            })
            .catch(error => console.error(error));

    }, [])


    const checkIfFullySaved = () => {
        const isSaved = true

        setIsFullySaved(isSaved);

        if (isSaved) {
            toast({
                title: 'Successfully saved.',
                description: "",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })

        } else {

            toast({
                title: 'Empty fields.',
                description: "You should fill up everything",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

        }


    };


    const handleSave = (event) => {
        checkIfFullySaved();
    };

    return (
        <Stack direction="column" align="center" mb={4}>

            {isFullySaved ? <CircularProgress isIndeterminate color='bl' thickness='100rem' /> :
                <Stack w='100%'>

                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Actions
                        </MenuButton>
                        <MenuList display='flex' flexDirection='column'>
                            {skills.map(skill => (

                                <Checkbox
                                    onChange={handleSkillSelect}
                                    p={2}
                                    placeholder='Select skills'
                                    closeMenuOnSelect={false}
                                    key={skill.id} value={skill.name}
                                >
                                    {skill.name}
                                </Checkbox>
                            ))}
                        </MenuList>
                    </Menu>


                    {selectedSkills &&
                        selectedSkills.map(skill => {
                            <Text>{skill.name}</Text>
                        })}


                    <Button onClick={handleSave}>Save</Button>
                </Stack>
            }
        </Stack>
    );
};

export default StepSkills;
