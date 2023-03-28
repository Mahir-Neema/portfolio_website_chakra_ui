import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react'

function Profile() {
  const [isNotSmallerscr] = useMediaQuery('(min-width:600px)'); 
  return (
    <Flex direction={isNotSmallerscr ? "row" : "column"} w="100%"  pl={isNotSmallerscr ? "32" : "0"}>
      <Box alignSelf="center" justifySelf="left">
        <Heading fontWeight="extrabold" color="cyan.500" size="3xl">Projects</Heading>
      </Box>

      <Box alignSelf="center" px="10" py="10">
        <Flex direction={isNotSmallerscr ? "row" : "column"} mt="8">
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" m="4" justify="flex-end" _hover={{bg:"blue.500"}}>
              <Text color="white" p="4" fontSize="2xl" fontWeight="semibold">
                Chat App
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="yellow.400" h="30vh" w="30vh" m="4" justify="flex-end" _hover={{bg:"yellow.500"}}>
              <Text color="white" p="4" fontSize="2xl" fontWeight="semibold">
                PDF Merger
              </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="purple.400" h="30vh" w="30vh" m="4" justify="flex-end" _hover={{bg:"purple.500"}}>
              <Text color="white" p="4" fontSize="2xl" fontWeight="semibold">
                Weather App
              </Text>
          </Flex>
          
        </Flex>
      </Box>
    </Flex>
  )
}

export default Profile