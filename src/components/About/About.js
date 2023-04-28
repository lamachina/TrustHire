import { useContext, useState } from 'react';
import { Box, Button, Center, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import translations from '../../translations.json';
import main from './iso_bc.png'
import Plx from 'react-plx';
import Summary from './Summary';
import { parallaxDataEnter, parallaxDataExit } from '../../animations';
import LanguageContext from '../../LanguageContext';

const About = () => {

    const { language } = useContext(LanguageContext);
    const { title, heroImageAlt, paragraph1, paragraph2, paragraph3, cta } = translations[language];

    const bgColor = useColorModeValue('gray.50', 'gray.800');
    const textColor = useColorModeValue('gray.700', 'gray.200');



    return (
        <Stack mt='10%' bg={bgColor} color={textColor} display='flex' flexDirection='column' justifyContent='center' alignItems='center' overflow='hidden' gap={8}>

            <Stack p={8} gap={8}>
                <Box textAlign="center">
                    <Heading as="h1" fontSize={['4xl', '5xl']}>
                        {title}
                    </Heading>

                </Box>
                <Plx
                    parallaxData={parallaxDataEnter}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Image maxH={400} src={main} alt={heroImageAlt} borderRadius="lg" />

                </Plx>





                <Stack mb={8} gap={8}>
                    <Plx
                        parallaxData={parallaxDataExit}
                    >
                        <Text fontSize='lg' >{paragraph1}</Text>


                    </Plx>
                    <Plx
                        parallaxData={parallaxDataExit}
                    >
                        <Text fontSize={['lg', 'xl']}>{paragraph2}</Text>

                    </Plx>

                    <Plx
                        parallaxData={parallaxDataExit}
                    >
                        <Text fontSize={['lg', 'xl']}>{paragraph3}</Text>

                    </Plx>
                </Stack>
                <Box textAlign="center">
                    <Button colorScheme="blue" size="lg">
                        look
                    </Button>
                </Box>
            </Stack>

            <Stack>
                <Summary />
            </Stack>
        </Stack>
    );
};

export default About;
