import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import hand from "./iso_hand.png"
import business from "./iso_business.png"
import ScrollScalingComponent from '../Custom/AnimatedWrapper'

const cards = [
    {
        image: hand,
        title: 'Tolerance in business',
        description: 'Because security is important.',
        btm: 'WE BELIEVE',
    },
    {
        image: business,
        title: 'Transparency is the key',
        description: 'Because time is also important.',
        btm: 'WE TRUST',
    },
    {
        image: hand,
        title: 'For the rest',
        description: 'Because everything is important.',
        btm: 'WE HIRE',
    },
];

function Idea() {
    return (
        <Stack pt='5rem' gap={16} spacing={6} display='flex' justifyContent='center' alignItems='center' flexDirection='row' flexWrap='wrap'>
            {cards.map((card) => (
                <ScrollScalingComponent>

                    <Card variant='outline' key={card.title} maxW='400px' borderRadius='xl'>
                        <CardBody>
                            <Image src={card.image} alt={card.title} borderRadius='xl' bgSize='cover' mb='-4rem' mt='-10rem' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{card.title}</Heading>
                                <Text>{card.description}</Text>
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
