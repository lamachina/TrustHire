import Plx from 'react-plx'
import React from 'react'
import { Button, Heading, Stack, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { parallaxData, parallaxData2, parallaxDataCloud, parallaxDataCloud3 } from '../../animations';




function Landing() {

    const { colorMode, toggleColorMode } = useColorMode()


    const url = (name, wrap = false) =>
        `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


    return (
        <Stack h="100vh" overflow="hidden" display='flex' alignItems='center' gap={3}>

            <Plx
                parallaxData={parallaxDataCloud}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    top: "-10%",
                    position: "fixed",
                    height: "100vh",
                    zIndex: -1
                }}
            >
                <div>
                    <img
                        src={url("cloud")}
                        style={{
                            display: "block",
                            width: "40%",
                            marginLeft: "55%",
                            transform: "translateX(-100px)",
                            opacity: 0.3
                        }} />
                    <Plx
                        parallaxData={parallaxDataCloud3}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "fixed",
                            top: "5%",
                            left: "50%",
                            height: "100%",
                            zIndex: -1
                        }}
                    >
                        {colorMode === 'light' ?
                            <SunIcon color='yellow.500' sx={{
                                display: "block",
                                boxSize: 10,
                                opacity: 0.7
                            }} /> :
                            <MoonIcon color='yellow.200' sx={{
                                display: "block",
                                boxSize: 10,
                                opacity: 0.7
                            }} />
                        }

                    </Plx>

                </div>


            </Plx>

            <Plx
                parallaxData={parallaxData}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    height: '100vh',
                    zIndex: -1,
                }}
            >
                <Heading size="4xl">Trust</Heading>
            </Plx>
            <Plx
                parallaxData={parallaxData2}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    height: '100vh',
                    zIndex: -1,
                }}
            >
                <Heading color='bl' size="4xl">Hire</Heading>
            </Plx>
            <Plx
                parallaxData={parallaxDataCloud3}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    top: '30%',
                    height: '100vh',
                    zIndex: 1,
                }}
            >
                <Link to='/about'>
                    <Button colorScheme='linkedin'>Get Started</Button>
                </Link>
            </Plx>
        </Stack >
    )
}

export default Landing
