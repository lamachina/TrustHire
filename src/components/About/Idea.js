import { Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import hand from "./iso_hand.png"
import business from "./iso_business.png"
import ScrollScalingComponent from '../Custom/AnimatedWrapper'
import LanguageContext from '../../LanguageContext'
import translations from "../../translations.json"

const cards = [
    {
        image: hand,

        btm: 'WE BELIEVE',
    },
    {
        image: business,
        btm: 'WE TRUST',
    },
    {
        image: hand,
        btm: 'WE HIRE',
    },
];

function Idea() {
    const { language } = useContext(LanguageContext);

    return (
        <Stack pt='5rem' gap={16} spacing={6} display='flex' justifyContent='center' alignItems='center' flexDirection='row' flexWrap='wrap'>

            <Heading w='100%' pb={16}>
                {translations[language].offervalue}
            </Heading>
            {cards.map((card, index) => (
                <ScrollScalingComponent>

                    <Card variant='outline' key={card.title} maxW='400px' borderRadius='xl'>
                        <CardBody>
                            <Image src={card.image} alt={card.title} borderRadius='xl' bgSize='cover' mb='-4rem' mt='-10rem' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{translations[language].v1[index].t}</Heading>
                                <Text>{translations[language].v1[index].st}</Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter borderBottomRadius='xl' bg='navbar' >
                            <Text fontFamily='heading' fontSize='xl'>{card.btm}</Text>
                        </CardFooter>
                    </Card>
                </ScrollScalingComponent>

            ))}
        </Stack>
    );
}

export default Idea;
