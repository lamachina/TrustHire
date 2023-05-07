import { Button, Container, Flex, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import IntroMint from './IntroMint'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import StepPosition from './Step/StepPosition';
import ScrollFadingComponent from '../Custom/GenerativeArt';
import StepSkills from './Step/StepSkills';
import StepMint from './Step/StepMint';



function Mint() {

    const [activeStep, setActiveStep] = useState(0);
    const [object, setObject] = useState({});

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(object);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const updateObject = (key, value) => {
        setObject((prevObject) => ({ ...prevObject, [key]: value }));
    };


    const steps = [
        { label: '', content: <IntroMint handleNext={handleNext} /> },
        { label: 'Basic infos', content: <StepPosition updateObject={updateObject} handleNext={handleNext} /> },
        { label: 'Skills', content: <StepSkills updateObject={updateObject} handleNext={handleNext} /> },
        { label: 'Mint', content: <StepMint userData={object} /> },
    ];


    return (

        <Flex pt={24} w='100%' flexDirection='column'>
            <Container
                p={2}
                borderRadius="lg"
                maxW="xl"
                display='flex' flexDirection='column'
            >
                <ScrollFadingComponent>

                    <Text textAlign='start' fontSize="3xl">
                        {steps[activeStep].label}
                    </Text>
                    {steps[activeStep].content}
                    <Stack direction="row" mt={8} justify="space-between">
                        {activeStep > 0 && (
                            <Button
                                leftIcon={<ChevronLeftIcon />}
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                        )}
                        {/*  {activeStep < steps.length - 1 ? (
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                onClick={handleNext}
                                colorScheme="blue"
                            >
                                Next
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    setActiveStep(0);
                                    setObject({});
                                }}
                                colorScheme="blue"
                            >
                                Restart
                            </Button>
                        )} */}
                    </Stack>
                </ScrollFadingComponent>

            </Container>



        </Flex>

    )
}

export default Mint