import { Box, Button, Divider, Flex, Heading, Text, Stack, List, ListItem, Image, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iso_step from "./iso_step.png"
import { CloseIcon } from '@chakra-ui/icons';

function IntroMint() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Flex w='100%' flexDirection='column' gap={4}>
            <Text fontSize='sm'>Because it never was...</Text>
            <Stack direction='row' display='flex' justifyContent='center'>
                <Heading fontFamily='futur'>so easy to</Heading>
                <Heading color='bl'>TRUST.</Heading>
            </Stack>
            <Divider />
            <Text fontSize='sm'>Are you ready to mint your TRHR job ?</Text>

            <Stack display='flex' alignItems='center'>
                <Image src={iso_step} maxH={360} maxW={360} />
                <List >
                    <Stack direction='column' display='flex' alignItems='center'>
                        <ListItem>A brief description of the position and its skills.</ListItem>
                        <ListItem>The start and the end of the contract.</ListItem>
                        <ListItem>5 minutes and less then 0.001 MATIC</ListItem>
                    </Stack>
                </List>
            </Stack>

            <Box bg='bl' w='100%' p={4}>

                <Text> WATCH OUR 5MIN TUTORIAL HERE !</Text>
            </Box>


            <Button onClick={toggleSidebar}>QUICK HELP</Button>

            <Stack>
                <Drawer placement="bottom" onClose={toggleSidebar} isOpen={isOpen} >
                    <DrawerOverlay display='flex' justifyContent='center' alignItems='center' >
                        <DrawerContent>
                            <DrawerHeader>
                                Check our tutorials if you need help...
                            </DrawerHeader>
                            <DrawerBody>
                                <Box padding="2rem" gap={4} display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' >

                                    <Text >HOW TO GET TRHR ?</Text>
                                    <Divider />
                                    <Text >TUTORIAL VIDEO</Text>
                                    <Divider />
                                    <Text fontFamily='futur'>WHITEPAPER</Text>
                                    <Text fontFamily='futur'>CONTACT</Text>

                                    <Divider />

                                </Box>
                            </DrawerBody>

                            <DrawerFooter display='flex' justifyContent='space-between'>

                                <CloseIcon color='red.900' boxSize={8} onClick={toggleSidebar} />

                            </DrawerFooter>
                        </DrawerContent>

                    </DrawerOverlay>
                </Drawer>
            </Stack>

        </Flex>

    )
}

export default IntroMint