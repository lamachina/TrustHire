import { useContext, useState } from 'react';
import { Box, Button, Card, Center, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import translations from '../../translations.json';
import main from './iso_bc.png'
import Summary from './Summary';
import LanguageContext from '../../LanguageContext';
import ScrollScalingComponent from '../Custom/AnimatedWrapper';

const About = () => {

    const { language } = useContext(LanguageContext);
    const { title, heroImageAlt, paragraph1, paragraph2, paragraph3, cta } = translations[language];

    const bgColor = useColorModeValue('gray.50', 'gray.800');
    const textColor = useColorModeValue('gray.700', 'gray.200');



    return (
        <Stack mt='10%' bg={bgColor} color={textColor} display='flex' flexDirection='column' justifyContent='center' alignItems='center' overflow='hidden' gap={8}>

            <Stack p={8} gap={8} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box textAlign="center">
                    <ScrollScalingComponent>
                        <Heading as="h1" fontSize={['4xl', '5xl']}>
                            {title}
                        </Heading>
                    </ScrollScalingComponent>
                </Box>
                <ScrollScalingComponent>

                    <Image maxH={400} src={main} alt={heroImageAlt} borderRadius="lg" />

                </ScrollScalingComponent>



                <ScrollScalingComponent>

                    <Stack mb={8} gap={8}>
                        <Text fontSize='lg' >{paragraph1}</Text>


                        <Text fontSize={['lg', 'xl']}>{paragraph2}</Text>
                        <Text fontSize={['lg', 'xl']}>{paragraph3}</Text>
                    </Stack>
                </ScrollScalingComponent>
                <ScrollScalingComponent>

                    <Box textAlign="center">
                        <Button colorScheme="blue" size="lg">
                            look
                        </Button>
                    </Box>
                </ScrollScalingComponent>
            </Stack>

            <ScrollScalingComponent>
                <Stack>
                    <Summary />
                </Stack>
            </ScrollScalingComponent>
            <Box w="70%" maxH='400px' display='flex' justifyContent='center'>
            </Box>
        </Stack >
    );
};

export default About;
