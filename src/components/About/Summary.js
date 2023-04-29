import { useContext, useState } from 'react';
import { Box, Button, Card, CardBody, CardHeader, Center, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import main from './iso_hire.png'
import iso from './iso_lg.png'
import translations from "../../translations.json"
import LanguageContext from '../../LanguageContext';
import ScrollScalingComponent from '../Custom/AnimatedWrapper';

function Summary() {

    const { language } = useContext(LanguageContext);
    const { About, paragraph1A, paragraph2A, paragraph3A, ctaA } = translations[language];

    return (
        <div>
            <Stack p={4} gap={8} display='flex' alignItems='center'>
                <Box textAlign="center">
                    <Heading as="h1" fontSize={'3xl'}>
                        {About}
                    </Heading>

                </Box>
                <Image maxH={400} maxW={400} src={main} borderRadius="lg" />
                <Stack mb={8} gap={8} maxWidth='80%'>
                    <ScrollScalingComponent>
                        <Text fontSize='lg' >{paragraph1A}</Text>
                        <Text fontSize={'lg'}>{paragraph2A}</Text>
                    </ScrollScalingComponent>
                </Stack>
            </Stack>
        </div>
    )
}

export default Summary