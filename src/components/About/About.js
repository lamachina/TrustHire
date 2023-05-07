import { useContext } from 'react';
import { Box, Button, Divider, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import translations from '../../translations.json';
import main from './iso_bc.png'
import Summary from './Summary';
import LanguageContext from '../../LanguageContext';
import ScrollScalingComponent from '../Custom/AnimatedWrapper';
import ScrollFadingComponent from '../Custom/GenerativeArt';
import Idea from './Idea';

const About = () => {

    const { language } = useContext(LanguageContext);
    const { title, heroImageAlt, paragraph1, paragraph2, paragraph3 } = translations[language];

    return (
        <Stack maxW='90%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' overflow='hidden' gap={8}>

            <Stack maxW='95%' pt={12} gap={8} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box textAlign="center" p={4}>
                    <ScrollScalingComponent>
                        <Heading as="h1" fontSize={['4xl', '5xl']}>
                            {title}
                        </Heading>
                    </ScrollScalingComponent>
                </Box>
                <ScrollScalingComponent >

                    <Image maxH={400} src={main} alt={heroImageAlt} borderRadius="lg" />

                </ScrollScalingComponent>

                <Stack mb={8} gap={8}>
                    <Text fontSize='lg' >{paragraph1}</Text>
                    <Text fontSize={'lg'}>{paragraph2}</Text>
                    <Text fontSize={['lg', 'xl']}>{paragraph3}</Text>
                </Stack>
                <Divider />
                <ScrollFadingComponent>
                    <Stack mb={32}>
                        <Summary />
                    </Stack>
                </ScrollFadingComponent>
                <Idea />
            </Stack>

        </Stack>
    );
};

export default About;
