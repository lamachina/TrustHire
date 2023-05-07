import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

function StepMint({ userData }) {

    const StartDate = new Date(userData.stepOne.firmDateStart);
    const EndDate = new Date(userData.stepOne.firmDateEnd);

    return (
        <Flex alignItems='center' justifyContent='center'>

            <Card w='90%' variant='elevated' borderRadius='2rem'>
                <CardHeader>
                    <Heading fontFamily='body'>{userData.stepOne.firmPosition}</Heading>
                    <Stack display='flex' alignItems='baseline' justifyContent='space-around' flexDirection='row'>

                        <Text>{StartDate.toLocaleDateString()}</Text>
                        <ArrowRightIcon fontSize='2xs' />
                        <Text>{EndDate.toLocaleDateString()}</Text>



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
                </CardBody>
                <Divider />

                <CardFooter gap={4} justifyContent='space-between' display='flex'>
                    <Button colorScheme='red'>
                        Decline
                    </Button>
                    <Button colorScheme='telegram'>
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