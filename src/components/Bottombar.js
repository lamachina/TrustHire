import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'

function Bottombar() {


    return (
        <Flex
            as="footer"
            justify="space-between"
            wrap="wrap"
            padding=".1rem"
            margin=".3rem"
            position="static"
            bottom="0"
        >

            <Box>
                © {new Date().getFullYear()}, TrustHire
            </Box>

            <Box>
                <Link
                    mr={6}
                    href="#"
                    fontWeight="medium"
                    _hover={{ textDecoration: 'none' }}
                >
                    Privacy Policy
                </Link>
                <Link
                    mr={6}
                    href="#"
                    fontWeight="medium"
                    _hover={{ textDecoration: 'none' }}
                >
                    Terms of Service
                </Link>
                <Link
                    mr={6}
                    href="#"
                    fontWeight="medium"
                    _hover={{ textDecoration: 'none' }}
                >
                    Contact Us
                </Link>
            </Box>
        </Flex>
    )
}

export default Bottombar