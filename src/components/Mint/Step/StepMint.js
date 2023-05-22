import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

function StepMint({ userData }) {
    const [jobDescription, setJobDescription] = useState('');

    const submitSkills = async () => {
        try {
            const response = await fetch('http://localhost:8000/answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ skills: userData.skills })
            });

            const data = await response.json();
            const { description } = data;

            // Update the job description state
            setJobDescription(description);
        } catch (error) {
            console.log(error);
        }
    };




    return (
        <Flex alignItems='center' justifyContent='center'>

            <Card w='90%' variant='elevated' borderRadius='2rem'>
                <CardHeader>
                    <Heading fontFamily='body'>{userData.stepOne.firmPosition}</Heading>
                    <Stack display='flex' alignItems='baseline' justifyContent='space-around' flexDirection='row'>

                        {/*   <Text>{StartDate.toLocaleDateString()}</Text>
                        <ArrowRightIcon fontSize='2xs' />
                        <Text>{EndDate.toLocaleDateString()}</Text>
 */}


                    </Stack>
                </CardHeader>
                <CardBody >

                    <Stack>
                        {Object.keys(userData.skills).map((skill, index) => (
                            <Text key={index} fontWeight='bold'>
                                {skill}: {userData.skills[skill]}
                            </Text>
                        ))}
                    </Stack>
                    <Text>{jobDescription}</Text>
                </CardBody>
                <Divider />

                <CardFooter gap={4} justifyContent='space-between' display='flex'>
                    <Button colorScheme='red'>
                        Decline
                    </Button>
                    <Button colorScheme='telegram' onClick={submitSkills}>
                        Modify
                    </Button>
                    <Button colorScheme='whatsapp'>
                        MINT
                    </Button>


                </CardFooter>
            </Card>
        </Flex>

    );
};


export default StepMint