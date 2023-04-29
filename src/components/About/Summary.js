import { useContext } from 'react';
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import main from './iso_hire.png'
import translations from "../../translations.json"
import LanguageContext from '../../LanguageContext';

function Summary() {
    const { language } = useContext(LanguageContext);
    const { About, paragraph1A } = translations[language];

    return (
        <div>
            <Stack p={4} gap={8} display='flex' alignItems='center'>
                <Box textAlign="center">
                    <Heading as="h1" fontSize={'3xl'}>
                        {About}
                    </Heading>

                </Box>
                <Image maxH={400} maxW={400} src={main} borderRadius="lg" />

                <Stack mb={8} gap={1} maxWidth='80%' textAlign='start' w='60%'>
                    <Text fontSize='lg' >just a subtitle</Text>
                    <Heading>Now a big title</Heading>
                    <Text>{paragraph1A}</Text>
                    <Button >CLICK</Button>
                    <Button variant='ghost' color='orange.200'>OR HERE</Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default Summary