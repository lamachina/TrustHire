import Plx from 'react-plx'
import React from 'react'
import { Heading, Stack, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';



const parallaxData = [
    {
        start: "self",
        end: "100vh",
        properties: [
            {
                startValue: 0,
                endValue: -100,
                property: "translateY",
            },

            {
                startValue: 1,
                endValue: 0,
                property: "opacity",
            },
        ],
    },
];
const parallaxData2 = [
    {
        start: "self",
        end: "90vh",
        properties: [
            {
                startValue: 100,
                endValue: 0,
                property: "translateX",
            },
            {
                startValue: 0,
                endValue: 1,
                property: "opacity",
            },
        ],
    },
];
const parallaxDataCloud = [
    {
        start: "0",
        end: "70vh",
        properties: [
            {
                startValue: -100,
                endValue: 0,
                property: "translateX",
            },
            {
                startValue: 0,
                endValue: 1,
                property: "opacity",
            },
        ],
    },
];

const parallaxDataCloud3 = [
    {
        start: "self",
        end: "100vh",
        properties: [
            {
                startValue: 100,
                endValue: 0,
                property: "translateY",
            },
            {
                startValue: 0,
                endValue: 1,
                property: "opacity",
            },
        ],
    },
];

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
            </Plx><Plx
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
        </Stack >
    )
}

export default Landing
