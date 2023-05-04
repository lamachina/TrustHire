import { useContext } from 'react';
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import main from './iso_hiree.png'
import translations from "../../translations.json"
import LanguageContext from '../../LanguageContext';
import { motion } from "framer-motion";

function Summary() {
    const { language } = useContext(LanguageContext);
    const { About, paragraph1A, paragraph2A } = translations[language];

    return (
        <div>
            <Stack p={4} gap={8} display='flex' alignItems='center'>
                <Box textAlign="center">
                    <Heading as="h1" fontSize={'3xl'}>
                        {About}
                    </Heading>

                </Box>
                <motion.div whileTap={{ scale: 0.9 }}>
                    <Image maxH={400} maxW={400} src={main} borderRadius="lg" />
                </motion.div>

                <Stack mb={8} gap={1} maxWidth='80%' textAlign='start' w='60%'>
                    <Text fontSize='lg' >{paragraph2A}</Text>
                    <Heading>Mint your TRHR</Heading>
                    <Text>{paragraph1A}</Text>
                    <Button borderColor='#000'>LEARN</Button>
                    <Button variant='ghost' color='bl'>MINT</Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default Summary