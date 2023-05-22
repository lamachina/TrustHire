import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';

function StepMint({ updateObject, handleNext }) {
    const [skills, setSkills] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const chat = async (e, message) => {
        e.preventDefault();


        let msgs = chats;
        msgs.push({ role: 'user', content: message });

        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, chats: msgs }),
            });

            if (response.ok) {
                const data = await response.json();
                setChats(data.chats);
                setIsTyping(false);
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setMessage('');
    };

    return (
        <Flex alignItems="center" justifyContent="center">
            <Card w="90%" variant="elevated" borderRadius="2rem">
                <CardHeader>
                    <Heading fontFamily="body">Job Description</Heading>
                </CardHeader>
                <CardBody>

                    <Stack spacing={4}>
                        <Text>Enter Skills:</Text>
                        <Input
                            type="text"
                            name="message"
                            value={message}
                            placeholder="Type a message here and hit Enter..."
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button onClick={(e) => chat(e, message)}>Submit</Button>
                    </Stack>


                    <Stack>
                        {chats && chats.length
                            ? chats.map((chat, index) => (
                                <p key={index} className={chat.role === 'user' ? 'user_msg' : ''}>
                                    <span>
                                        <b>{chat.role.toUpperCase()}</b>
                                    </span>
                                    <span>:</span>
                                    <span>{chat.content}</span>
                                </p>
                            ))
                            : ''}
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter gap={4} justifyContent="space-between" display="flex">
                    <Button colorScheme="telegram" onClick={chat}>
                        Generate Job Description
                    </Button>
                </CardFooter>
            </Card>
            {description && (
                <Card w="90%" variant="elevated" borderRadius="2rem" mt={4}>
                    <CardHeader>
                        <Heading fontFamily="body">Job Description Result</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>{description}</Text>
                    </CardBody>
                </Card>
            )}


        </Flex>
    );
}

export default StepMint;
