import React from 'react'
import { Button, Heading, Stack, Text, useColorMode } from '@chakra-ui/react'
import ScrollScalingComponent from '../Custom/AnimatedWrapper';




function Landing() {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div>
            <ScrollScalingComponent>

                <Heading >Hi</Heading>

            </ScrollScalingComponent>
        </div>

    )
}

export default Landing
