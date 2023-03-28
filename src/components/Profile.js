import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react'

function Profile() {
  const [isNotSmallerscr] = useMediaQuery('(min-width:600px)'); 
  return (
    <>
    <Flex direction={isNotSmallerscr ? "row" : "column"} w="100%"  pl={isNotSmallerscr ? "32" : "0"}>
      <Box alignSelf="center" justifySelf="left">
        <Heading fontWeight="extrabold" color="cyan.500" size="3xl">Projects</Heading>
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
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vw" minWidth="230px" m="4"  justify="flex-end" _hover={{bg:"blue.300"}} onClick={() =>window.open("https://mahir-neema.github.io/chat-app/")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
                Chat App
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="yellow.400" h="30vh" w="30vw" minWidth="230px" m="4" justify="flex-end" _hover={{bg:"yellow.300"}} onClick={() =>window.open("https://github.com/Mahir-Neema/Pdf_merger")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
                PDF Merger
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="purple.400" h="30vh" w="30vw" minWidth="230px" m="4" justify="flex-end" _hover={{bg:"purple.300"}} onClick={() =>window.open("https://mahir-neema.github.io/weather-app/")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
                Weather App
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="teal.400" h="30vh" w="30vw" minWidth="230px" m="4" justify="flex-end" _hover={{bg:"teal.300"}} onClick={() =>window.open("https://github.com/Mahir-Neema/Netflix-clone")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
                Netflix clone 
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="gray.400" h="30vh" w="30vw" minWidth="230px" m="4" justify="flex-end" _hover={{bg:"gray.300"}} onClick={() =>window.open("https://mahir-neema.github.io/least-time-travel-path-project/")} cursor="pointer">
              <Text color="white" p="4" fontSize="3xl" fontWeight="semibold">
              Least time travel path 
              </Text>
          </Flex>
          
          
        </Flex>
      </Box>
    </Flex>
    </>
  )
}

export default Profile