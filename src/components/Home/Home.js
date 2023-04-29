import React, { useRef } from 'react'
import Landing from './Landing'
import { Stack, Text } from '@chakra-ui/react'


const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


function Home() {
    const parallax = useRef(null)
    return (
        <Stack h='100vh' overflow='hidden'>
            <Landing />
        </Stack>
    )
}

export default Home