import { useContext, useState } from 'react';
import { Box, Button, Card, CardBody, CardHeader, Center, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import main from './iso_hire.png'
import iso from './iso_lg.png'
import translations from "../../translations.json"
import LanguageContext from '../../LanguageContext';

function Summary() {

    const { language } = useContext(LanguageContext);
    const { About, paragraph1A, paragraph2A, paragraph3A, ctaA } = translations[language];

    return (
        <div>
            <Stack p={8} gap={8} display='flex' alignItems='center'>
                <Box textAlign="center">
                    <Heading as="h1" fontSize={['4xl', '5xl']}>
                        {About}
                    </Heading>

                </Box>

                <Image maxH={400} maxW={400} src={main} borderRadius="lg" />


                <Stack mb={8} gap={8}>
                    <Text fontSize='lg' >{paragraph1A}</Text>


                    <Text fontSize={['lg', 'xl']}>{paragraph2A}</Text>



                    <Stack display='flex' flexWrap='wrap' flexDirection='row'>
                        <Card maxWidth='440px' >
                            <CardHeader>
                                <Text fontSize={['lg', 'xl']}>{paragraph3A}</Text>
                            </CardHeader>
                            <CardBody display='flex' justifyContent='center'>
                                <Image src={iso} />
                            </CardBody>
                        </Card>
                        <Text>lala</Text>

                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default Summary