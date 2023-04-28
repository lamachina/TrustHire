import Plx from 'react-plx'
import React from 'react'
import { Heading, Image, Stack } from '@chakra-ui/react'

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
                startValue: 0,
                endValue: -100,
                property: "translateX",
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
        end: "100vh",
        properties: [
            {
                startValue: -100,
                endValue: 0,
                property: "translateY",
            },
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

function Landing() {
    return (
        <Stack h="100vh" overflow="hidden" display='flex' alignItems='center' gap={3}>
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
        </Stack>
    )
}

export default Landing
