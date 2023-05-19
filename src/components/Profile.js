import { Box, Center, Flex, Heading, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import {FaConnectdevelop} from "react-icons/fa";
import React from 'react'
import Projects from './Projects';

function Profile() {
  const [isNotSmallerscr] = useMediaQuery('(min-width:600px)'); 
  return (
    <>
    <Box alignSelf="center" justifySelf="left" ><Heading fontWeight="bold" color="yellow.300" size="3xl">Skills</Heading></Box>
      <Box alignSelf="center" justifySelf="space-between" >
        <Flex direction={isNotSmallerscr ? "row" : "column"}>
          <Text color="purple.400" p="2" fontSize="4xl" fontWeight="bold" justifySelf="center" textAlign="center">C++</Text>
          <Text color="yellow.400" p="2" fontSize="4xl" fontWeight="bold" justifySelf="right" textAlign="center">JavaScript</Text>
          <Text color="green.300" p="2" fontSize="4xl" fontWeight="bold" justifySelf="right" textAlign="center">Python</Text>
          <Text color="red.500" p="2" fontSize="4xl" fontWeight="bold" justifySelf="right" textAlign="center">Html CSS</Text>
          <Text color="cyan.400" p="2" fontSize="4xl" fontWeight="bold" justifySelf="right" textAlign="center">React JS</Text>
          <Text color="yellow.500" p="2" fontSize="4xl" fontWeight="bold" justifySelf="right" textAlign="center">Node JS</Text>
        </Flex>
      </Box>

      <Spacer/>
      <br/>
      <Projects/>
    
    <Flex direction={isNotSmallerscr ? "row" : "column"} w="100%"  pl={isNotSmallerscr ? "32" : "0"}>
      <br/>
      <Box alignSelf="center" justifySelf="left">
        <Heading fontWeight="extrabold" color="cyan.500" size="3xl">Certificates</Heading>
      </Box>

      <Box alignSelf="center" px="10" py="10" overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '1px',
          },
          '&::-webkit-scrollbar-track': {
            width: '1px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: "lightgrey",
            borderRadius: '10px',
          },
        }}> 
        <Flex direction={isNotSmallerscr ? "row" : "column"} mt="8">
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vw" minWidth="230px" m="4"  justify="flex-end" _hover={{bg:"blue.300"}} onClick={() =>window.open("https://www.coursera.org/account/accomplishments/certificate/AQQUT4WHC2AX")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
                Advanced React
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="yellow.400" h="30vh" w="30vw" minWidth="230px" m="4" justify="flex-end" _hover={{bg:"yellow.300"}} onClick={() =>window.open("https://www.coursera.org/account/accomplishments/certificate/TWNBG9FCLCUH")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
                React Basics
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="purple.400" h="30vh" w="30vw" minWidth="230px" m="4" justify="flex-end" _hover={{bg:"purple.300"}} onClick={() =>window.open("https://www.coursera.org/account/accomplishments/certificate/8GUK9PAB3FQG")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
                Version control with Git
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="teal.400" h="30vh" w="30vw" minWidth="230px" m="4" justify="flex-end" _hover={{bg:"teal.300"}} onClick={() =>window.open("https://www.coursera.org/account/accomplishments/certificate/4H2THF89AP59")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
               Algorithmic Toolbox
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="gray.400" h="30vh" w="30vw" minWidth="230px" m="4" justify="flex-end" _hover={{bg:"gray.300"}} onClick={() =>window.open("https://www.coursera.org/account/accomplishments/certificate/MMVNJEQEMMET")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
              Crash Course on Python
              </Text>
          </Flex>
          
          
        </Flex>
      </Box>
    </Flex>
    </>
  )
}

export default Profile