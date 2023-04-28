import { useContext, useState } from 'react';
import { Box, Button, Card, CardBody, CardHeader, Center, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import main from './iso_hire.png'
import iso from './iso_lg.png'
import Plx from 'react-plx';
import { parallaxData, parallaxData2, parallaxDataCloud, parallaxDataCloud3, parallaxDataExit, parallaxDataEnter, parallaxDataOpa, parallaxDataEnd, parallaxDataEnd2 } from '../../animations';
import translations from "../../translations.json"
import LanguageContext from '../../LanguageContext';

function Summary() {

    const { language } = useContext(LanguageContext);
    const { About, paragraph1A, paragraph2A, paragraph3A, ctaA } = translations[language];

    return (
        <div>
            <Stack p={8} gap={8}>
                <Box textAlign="center">
                    <Heading as="h1" fontSize={['4xl', '5xl']}>
                        {About}
                    </Heading>

                </Box>
                <Plx
                    parallaxData={parallaxDataOpa}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Image maxH={400} src={main} borderRadius="lg" />

                </Plx>

                <Stack mb={8} gap={8}>
                    <Plx
                        parallaxData={parallaxDataEnd}
                    >
                        <Text fontSize='lg' >{paragraph1A}</Text>


                    </Plx>
                    <Plx
                        parallaxData={parallaxDataEnd2}
                    >
                        <Text fontSize={['lg', 'xl']}>{paragraph2A}</Text>

                    </Plx>


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