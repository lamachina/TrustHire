import { Box, Button, Divider, Flex, Heading, Text, Stack, List, ListItem, Image, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iso_step from "./iso_step.png"
import { CloseIcon } from '@chakra-ui/icons';

function IntroMint({ handleNext }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Flex w='100%' flexDirection='column' gap={2} alignItems='center'>
            <Text fontSize='sm'>Because it's...</Text>
            <Stack direction='row' display='flex' justifyContent='center'>
                <Heading fontFamily='futur'>so easy to</Heading>
                <Heading color='bl'>TRUST.</Heading>

            </Stack>
            <Text fontFamily='futur' fontSize='sm'>Are you ready to mint your TRHR job ?</Text>

            {/*    <Stack display='flex' alignItems='center'>
                <Image src={iso_step} maxH={360} maxW={360} />

            </Stack> */}
            <Box bgImage={iso_step} bgPosition='center' h={360} w={360} bgSize='cover' p={4} display='flex' justifyContent='center' alignItems='end'>
                <Button _hover={{ bg: 'vd' }} fontFamily='heading' variant='solid' colorScheme='telegram' size='lg' mb='3rem' onClick={handleNext}>START</Button>
            </Box>
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

                            <DrawerFooter display='flex' justifyContent='end'>

                                <CloseIcon color='red.900' boxSize={8} onClick={toggleSidebar} />

                            </DrawerFooter>
                        </DrawerContent>

                    </DrawerOverlay>
                </Drawer>
            </Stack>

        </Flex >

    )
}

export default IntroMint