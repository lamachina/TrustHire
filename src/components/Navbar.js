import { ChatIcon, CloseIcon, HamburgerIcon, InfoOutlineIcon, MoonIcon, SunIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, GenericAvatarIcon, Link, Select, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContext, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import LanguageContext from '../LanguageContext';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const { colorMode, toggleColorMode } = useColorMode();
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Flex
            className='navbar'
            as="nav"
            justify="space-between"
            alignItems='center'
            wrap="wrap"
            bg='navbar'
            padding="0.7rem"
            w='100%'
            position="fixed">
            <Box display='flex' flexDirection='row' alignItems='center' gap={4}>
                <Link as={ReactLink} to="/" >
                    <Stack display='flex' flexDirection='row' alignItems='center' gap={2}>
                        <ConnectButton label="Connect"
                            accountStatus={{
                                smallScreen: 'avatar',
                                largeScreen: 'full',
                            }}
                            showBalance={false}
                            chainStatus={isMobile ? "none" : "icon"}
                        />
                    </Stack>
                </Link>
            </Box>
            <Box onClick={toggleColorMode}>
                {colorMode === 'light' ? <SunIcon color='yellow.700' /> : <MoonIcon color='yellow.100' />}
            </Box>
            {!isMobile && <Box>
                <Select value={language} onChange={handleLanguageChange}>
                    <option value="en">ENG</option>
                    <option value="fr">FR</option>
                </Select>
            </Box>}

            {isMobile && (
                <Box display='block' onClick={toggleSidebar}>
                    <HamburgerIcon boxSize='10' />
                </Box>
            )}
            {!isMobile && (
                <Box display='flex' justifyContent='space-around'>
                    <Link
                        as={ReactLink}
                        mr={6}
                        to="/home"
                        _hover={{ textDecoration: 'none' }}
                    >
                        <Text>HOME</Text>
                    </Link>
                    <Link
                        as={ReactLink}
                        mr={6}
                        to="/about"
                        _hover={{ textDecoration: 'none' }}
                    >
                        <Text>INFOS</Text>
                    </Link>
                    <Link
                        as={ReactLink}
                        mr={6}
                        to="/dashboard"
                        _hover={{ textDecoration: 'none' }}
                    >
                        <Text>DASHBOARD</Text>
                    </Link>
                    <Link
                        as={ReactLink}
                        mr={6}
                        to="/mint"
                        _hover={{ textDecoration: 'none' }}
                    >
                        <Text color='bl'>MINT</Text>
                    </Link>
                    <Link
                        as={ReactLink}
                        mr={6}
                        to="/contact"
                        _hover={{ textDecoration: 'none' }}
                    >
                        <ChatIcon fontSize='xl' />
                    </Link>
                </Box>
            )}
            <Drawer placement="right" onClose={toggleSidebar} isOpen={isOpen} >
                <DrawerOverlay display='flex' justifyContent='center' alignItems='center' >
                    <DrawerContent>
                        <DrawerHeader>
                            Explore Trust Hire...
                        </DrawerHeader>
                        <DrawerBody>

                            <Box padding="2rem" gap={6} display='flex' flexDirection='column' alignItems='center' >
                                <Link
                                    as={ReactLink}
                                    to="/home"
                                    fontSize="2xl"
                                    fontWeight="medium"
                                    _hover={{ textDecoration: 'none' }}
                                    onClick={toggleSidebar}
                                >
                                    <Text fontFamily='futur'>HOME</Text>

                                </Link>
                                <Divider />
                                <Link
                                    as={ReactLink}
                                    to="/about"
                                    fontSize="2xl"
                                    fontWeight="medium"
                                    _hover={{ textDecoration: 'none' }}
                                    onClick={toggleSidebar}
                                >
                                    <Text fontFamily='futur'>INFOS</Text>
                                </Link>
                                <Divider />
                                <Link
                                    as={ReactLink}
                                    to="/dashboard"
                                    fontSize="2xl"
                                    fontWeight="medium"
                                    _hover={{ textDecoration: 'none' }}
                                    onClick={toggleSidebar}
                                >
                                    <Text fontFamily='futur'>DASHBOARD</Text>
                                </Link>
                                <Divider />
                                <Link
                                    as={ReactLink}
                                    to="/mint"
                                    fontSize="2xl"
                                    fontWeight="medium"
                                    _hover={{ textDecoration: 'none' }}
                                    onClick={toggleSidebar}
                                >
                                    <Text color='bl' fontFamily='futur'>MINT</Text>
                                </Link>
                                <Divider />
                                <Link
                                    as={ReactLink}
                                    to="/contact"
                                    fontSize="2xl"
                                    fontWeight="medium"
                                    _hover={{ textDecoration: 'none' }}
                                    onClick={toggleSidebar}
                                >
                                    <Text fontFamily='futur'>CONTACT</Text>
                                </Link>
                                <Divider />


                            </Box>
                        </DrawerBody>

                        <DrawerFooter display='flex' justifyContent='space-between'>
                            <Box>
                                <Select value={language} onChange={handleLanguageChange}>
                                    <option value="en">ENG</option>
                                    <option value="fr">FR</option>
                                </Select>
                            </Box>
                            <CloseIcon color='red.900' boxSize={8} onClick={toggleSidebar} />

                        </DrawerFooter>
                    </DrawerContent>

                </DrawerOverlay>
            </Drawer>
        </Flex>
    );
};

export default Navbar;
