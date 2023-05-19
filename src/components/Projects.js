import { Box, Flex, Heading,  Image,  Link,  Spacer,  Text,  useMediaQuery,  Wrap, WrapItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'
import { projects } from '../projectdata/ProjectData';

function Projects() {
    const [isNotSmallerscr] = useMediaQuery('(min-width:600px)'); 
  return (
    <>
        <Box alignSelf="center" justifySelf="left" >
            <Heading fontWeight="bold" color="cyan.500" size="3xl">Projects</Heading>
        </Box>
        <Box alignSelf="center">
            <Wrap direction={isNotSmallerscr ? "row" : "column"}>
                {projects.map((item,index)=>{
                    return(<>
                        <WrapItem>
                        <Box m="10" bg="#2D3748" p="5" rounded="xl" maxW='sm' w='300px' h='500px' style={{overflowY:"hidden"}}>
                            <Image rounded="xl" src={item.imgurl} alt={item.Name} htmlWidth='400px'/>
                            <Text color="purple.400" p="2" fontSize="2xl" fontWeight="bold" justifySelf="center" textAlign="center">{item.Name}</Text>
                            <Text color="green.300" p="2" fontSize="xl" fontWeight="bold" justifySelf="center" textAlign="center">{item.desc}</Text>
                            <Text color="#9DECF9" p="2" fontSize="xl" justifySelf="center" textAlign="center">Tech: {item.techstack}</Text>
                            <Link href={item.githublink} isExternal color="#E9D8FD" p="2"  textAlign="center">
                                Github<ExternalLinkIcon mx='2px' />
                            </Link>
                            <Link href={item.deployedlink} isExternal color="#E9D8FD" p="2"  textAlign="center">
                                Deployed Link<ExternalLinkIcon mx='2px' />
                            </Link>

                        </Box>
                        </WrapItem>
                    </>
                    );
                })}
            </Wrap>
        </Box>
    </>
  )
}

export default Projects