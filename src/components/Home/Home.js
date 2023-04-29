import React from 'react'
import Landing from './Landing'
import { Stack } from '@chakra-ui/react'


function Home() {
    return (
        <Stack pt={24} h='100%' overflow='hidden' w='100%'>
            <Landing />
        </Stack>
    )
}

export default Home