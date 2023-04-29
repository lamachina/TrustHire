import { InfoIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Text, Heading, Divider, Card, Flex, CardHeader, ModalOverlay, Button, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, IconButton, Stack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { useState } from "react";






const CardComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex pt={24}
            w='90%' flexDirection='column' alignItems='center'   >

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='none'
                    backdropFilter='auto'
                    backdropBlur='27px'
                />
                <ModalContent
                    bg='w'
                    w='80%'
                >
                    <ModalHeader>Name FULL</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Cool greetings from User!</Text>
                        <Text>Long description about im doing in life so the recrutor can see, plus i can sell myself beter!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Card
                p={4}
                rounded="xl"
                shadow="2xl"
                bg='navbar'
                display='flex'
                w='80%'
                alignItems='center'
            >
                <CardHeader w='100%' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                    <Heading fontSize="4xl" >
                        Name
                    </Heading>
                    <IconButton
                        icon={<InfoIcon />}
                        onClick={() => {
                            onOpen()
                        }}
                    />
                </CardHeader>


                <Accordion allowToggle w='100%'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ color: 'bl' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    2023
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Stack gap={4}>
                                <Stack direction='column' textAlign='start'>
                                    <Text fontSize="xl" color='bl' >
                                        Experciences
                                    </Text>
                                    <Text fontSize="sm" fontFamily='futur' >
                                        un petit rsume d eposition
                                    </Text>
                                    <Text fontSize='2xl'>Title job</Text>

                                </Stack>

                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ color: 'bl' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    2022
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Stack gap={4}>
                                <Stack direction='column' textAlign='start'>
                                    <Text fontSize="xl" color='bl' >
                                        Experciences
                                    </Text>
                                    <Text fontSize="sm" fontFamily='futur' >
                                        un petit rsume d eposition
                                    </Text>
                                    <Text fontSize='2xl'>Title job</Text>

                                </Stack>

                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ color: 'bl' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    2021
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <Stack gap={4}>
                                <Stack direction='column' textAlign='start'>
                                    <Text fontSize="xl" color='bl' >
                                        Experciences
                                    </Text>
                                    <Text fontSize="sm" fontFamily='futur' >
                                        un petit rsume d eposition
                                    </Text>
                                    <Text fontSize='2xl'>Title job</Text>

                                </Stack>

                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>


            </Card>
        </Flex>

    );
};

export default CardComponent;
