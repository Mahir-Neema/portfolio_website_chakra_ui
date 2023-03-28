import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Spinner } from '@chakra-ui/react';
import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerscr] = useMediaQuery('(min-width:600px)');
    return (
        <Stack>
            <Flex direction={isNotSmallerscr ? "row" : "column"}
                spacing="200px" p={isNotSmallerscr ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerscr ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, purple.600, blue.500)" bgClip='text' >Mahir Neema</Text>
                    <Text color={isDark ? "gray.200" : "gray.700"}>I have a keen interest in the software field.  I am proficient in C++, Python, and JavaScript. I have also developed skills in HTML, CSS, JavaScript, React JS, and Competitive Programming through self-learning and personal projects. Take a look at my work on GitHub and feel free to connect with me!</Text>
                    <Button mt={8} colorScheme={isDark?"blue":"yellow"} onClick={() =>
                        window.open("https://www.linkedin.com/in/mahir-neema-55b66319a/")}>Lets connect</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerscr ? "0" : "12"} mb={isNotSmallerscr ? "0" : "12"} borderRadius='full' 
                    backgroundColor="transparent" boxShadow="lg" m="4"
                    boxSize="290px" src="https://drive.google.com/uc?export=view&id=1I13Z20YBIYAPAcZdooDFA6f9HBRDTrAm" alt="drive image"/>
            </Flex>
        </Stack>
    )
}

export default Header