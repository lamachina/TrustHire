import { Button, CircularProgress, Input, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';



const StepPosition = ({ updateObject }) => {

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
        <Stack direction="column" align="center" mb={4}>

            {isFullySaved ? <CircularProgress isIndeterminate color='bl' thickness='100rem' /> :
                <Stack w='100%'>
                    <Text fontWeight="bold">Job Position:</Text>
                    <Input placeholder='The job position' name="firmPosition" onChange={handleChange} />
                    <Input name="firmDateStart" type="date" onChange={handleChange} />
                    <Input name="firmDateEnd" type="date" onChange={handleChange} />
                    <Button onClick={handleSave}>Save</Button>
                </Stack>
            }
        </Stack>
    );
};

export default StepPosition;
