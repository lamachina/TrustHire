import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import blue from "../Custom/blue.png"
import red from "../Custom/red.png"
import green from "../Custom/green.png"
import ScrollFadingComponent from '../Custom/GenerativeArt'
import ScrollScalingComponent from '../Custom/AnimatedWrapper'

const cards = [
    {
        image: blue,
        title: 'For security',
        description: 'Because security is important.',
        price: '$450',
    },
    {
        image: red,
        title: 'For time saving',
        description: 'Because time is also important.',
        price: '$150',
    },
    {
        image: green,
        title: 'For the rest',
        description: 'Because everything is important.',
        price: '$350',
    },
];

function Idea() {
    return (
        <Stack pt='5rem' gap={16} spacing={6} display='flex' justifyContent='center' alignItems='center' flexDirection='row' flexWrap='wrap'>
            {cards.map((card) => (
                <ScrollScalingComponent>

                    <Card key={card.title} maxW='400px' borderRadius='xl'>
                        <CardBody>
                            <Image src={card.image} alt={card.title} borderRadius='xl' bgSize='cover' mt='-5rem' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{card.title}</Heading>
                                <Text>{card.description}</Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Text fontFamily='futur' fontSize='2xl'>{card.price}</Text>
                        </CardFooter>
                    </Card>
                </ScrollScalingComponent>

            ))}
        </Stack>
    );
}

export default Idea;
