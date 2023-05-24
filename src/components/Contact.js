import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Flex,
    Input,
    Skeleton,
    Stack,
    Text,
    useToast,
} from '@chakra-ui/react';

function Contact() {

    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = async (e, message) => {

        e.preventDefault();
        setIsLoading(true);
        setIsModalOpen(true);

        try {
            const questione = message;

            const response = await fetch('https://general-ai.vercel.app/datap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ questione }),
            });
            const data = await response.json();
            console.log(data);

            // Handle the response from the server
            setResponse(data.result)
            if (response.ok) {
                // Handle the successful response
                setIsLoading(false);
                setIsModalOpen(false);
                toast({
                    status: 'success',
                    description: "XING responded!",
                    duration: 3000,
                    isClosable: true,
                });
                // Handle the response from the server
                setMessage(data.result)
            } else {
                // Handle the response error
                console.error('Error:', response.status);
                toast({
                    title: 'Something failed...',
                    description: "Your XINGs are safe. Please reload the page or try again later.",
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                });
                setIsLoading(false);
                setIsModalOpen(false);
            }
        } catch (error) {
            // Handle the fetch error
            console.error('Error:', error);
            toast({
                title: 'Something failed...',
                description: "Your XINGs are safe. Please reload the page or try again later.",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            });
            setIsLoading(false);
            setIsModalOpen(false);
            console.log(error);

        } finally {

        }
    };




    const toast = useToast();
    const [message, setMessage] = useState('');
    const [responsee, setresponsee] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const chat = async (e, message) => {





    };

    // Get the current timestamp using Date.now()
    const timestamp = Date.now();

    // Extract individual values from the timestamp
    const red = timestamp % 256;             // Red value between 0 and 255
    const green = (timestamp >> 8) % 256;    // Green value between 0 and 255
    const blue = (timestamp >> 16) % 256;    // Blue value between 0 and 255

    // Create the color string in RGB format
    const color = `rgb(${red}, ${green}, ${blue})`;
    const color2 = `rgb(${green}, ${red}, ${green})`;
    const color3 = `rgb(${blue}, ${red}, ${green})`;

    return (
        <Flex alignItems="center" justifyContent="center" w='100%' h='100%'>
            <Card w="90%" variant="elevated" borderColor='ca' h='600px' border="2px solid #000">
                <CardHeader>
                    <Text fontFamily='heading' color='cb'>Ask something about brc20 or rare sats:</Text>
                </CardHeader>
                <CardBody bg='cb'>
                    <Stack spacing={4}>
                        <Text color='ca'>How can I assist you today, dear Xingo?</Text>
                        <Divider />
                    </Stack>
                    <Stack>
                        {isModalOpen ? (
                            <>
                                <Skeleton startColor='ca' endColor='cb' height='20px' />
                                <Skeleton startColor='cc' endColor={color} height='20px' />
                                <Skeleton startColor='cb' endColor='cc' height='20px' />
                                <Skeleton startColor={color2} endColor='cb' height='20px' />
                                <Skeleton startColor='cb' endColor='cc' height='20px' />
                                <Skeleton startColor='cc' endColor={color3} height='20px' />
                                <Skeleton startColor='cc' endColor='ca' height='20px' />
                            </>
                        ) : response && <Text>{response}</Text>}
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter gap={4} justifyContent="end" display="flex">
                    <Input
                        bg='cc'
                        type="text"
                        name="message"
                        value={message}
                        placeholder="Ask something to Xingbot..."
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button bg='bg' onClick={(e) => handleSubmit(e, message)}>Submit</Button>
                </CardFooter>
            </Card>
        </Flex>
    );
}

export default Contact;
