import React, { useContext } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import ScrollScalingComponent from '../Custom/AnimatedWrapper';
import { motion } from "framer-motion";
import AnimatedCharacters from './AnimatedText';
import translations from "../../translations.json"
import LanguageContext from '../../LanguageContext';



function Landing() {
    const { language } = useContext(LanguageContext);


    const placeholderText = [
        { type: "heading1", text: "TRUST", color: "#5784BA", dur: 0.7 },
    ]
    const placeholderText2 = [
        { type: "heading1", text: "HIRE.", color: "#9AC8EB", dur: 2 },
    ]
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        }
    };


    return (
        <ScrollScalingComponent>
            <Stack justifyContent='center' gap={16}>
                <Stack alignItems='start' p={8} >
                    <motion.div
                        className="App"
                        initial="hidden"
                        animate={"visible"}
                        variants={container}
                    >
                        {placeholderText.map((item, index) => {
                            return <AnimatedCharacters {...item} key={index} />;
                        })}

                    </motion.div>
                    <motion.div
                        className="App"
                        initial="hidden"
                        animate={"visible"}
                        variants={container}
                    >
                        {placeholderText2.map((item, index) => {
                            return <AnimatedCharacters {...item} key={index} />;
                        })}

                    </motion.div>
                    <Text fontFamily='futur'>{translations[language].subtitleHome}</Text>

                </Stack>
                <Stack display='flex' justifyContent='space-between'  >
                    <motion.div whileHover={{ scale: 0.95, opacity: 0.5 }}>
                        <Box mb={-2} h={360} bgSize='contain' bg='gray.600' w='100%' >

                        </Box>
                    </motion.div>
                    <motion.div whileHover={{ scale: 0.9, opacity: 0.5 }}>
                        <Box mb={-2} h={360} bgSize='contain' bg='gray.500' w='100%' />
                    </motion.div>
                    <motion.div whileHover={{ scale: 0.85, opacity: 0.5 }}>
                        <Box mb={-2} h={360} bgSize='contain' bg='gray.400' w='100%' />
                    </motion.div>



                </Stack>

            </Stack>

        </ScrollScalingComponent>

    )
}

export default Landing
