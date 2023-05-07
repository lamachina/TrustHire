import { Button, CircularProgress, Flex, Image, Input, Stack, Text, keyframes, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import iso from "../intro.png"
import { motion } from "framer-motion";


const StepPosition = ({ updateObject, handleNext }) => {
    const animateShadow = () => keyframes`
    0% {
      opacity: 1;
      scale: 1;
    }
    33% {
      opacity: 0.44;
      scale: 0.98;
    }
    50% {
      opacity: 0.77;
      scale: 1;
    }
    88% {
      opacity: 0.44;
      scale: 1.13;
    }
    100% {
      opacity: 1;
    }
  `;
    const animation = animateShadow();
    const toast = useToast()

    const [inputValues, setInputValues] = useState({
        firmPosition: '',
        firmDateStart: '',
        firmDateEnd: '',
    });

    const [isFullySaved, setIsFullySaved] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'firmPosition') {
            setInputValues((prevInputValues) => ({
                ...prevInputValues,
                firmPosition: value,
            }));
        } else {
            const selectedDate = new Date(value);
            const timestamp = selectedDate.getTime();
            setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [name]: timestamp,
            }));
        }
        updateObject('stepOne', inputValues);
    };

    const checkIfFullySaved = () => {
        const isSaved = Object.values(inputValues).every(
            (value) => value !== ''
        );
        setIsFullySaved(isSaved);

        if (isSaved) {
            toast({
                title: 'Successfully saved.',
                description: "",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            setTimeout(() => {
                setIsFullySaved(false)
                handleNext()
            }, 1700);

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
        handleChange(event);
        checkIfFullySaved();
    };

    return (
        <Flex w='100%' flexDirection="column" alignItems="center" >

            <Image src={iso} h={360} w={360} mb='-5rem' css={{
                animation: `${animation} ease-in-out 20s infinite`,
            }} />
            {isFullySaved ? <CircularProgress isIndeterminate color='bl' thickness='100rem' /> :
                <Stack w='100%'>

                    <Input bg='bg' placeholder='Give the title of the position (Ex: Manager, CEO, ...)' name="firmPosition" onChange={handleChange} />
                    <Input name="firmDateStart" type="date" onChange={handleChange} />
                    <Input name="firmDateEnd" type="date" onChange={handleChange} />
                    <Button onClick={handleSave}>Save</Button>
                </Stack>
            }
        </Flex>
    );
};

export default StepPosition;
