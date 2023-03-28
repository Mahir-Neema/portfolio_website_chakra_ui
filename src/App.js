import { Flex, Heading, IconButton, Spacer, useColorMode, useMediaQuery, VStack } from '@chakra-ui/react';
import './App.css';
import { FaSun,FaMoon,FaLinkedin,FaGithub,FaTwitterSquare} from "react-icons/fa";
import Header from './components/Header';
import Profile from './components/Profile';

function App() {

  const {colorMode,toggleColorMode} = useColorMode()
  const isDark = colorMode==="dark"
  const [isNotSmallerscr] = useMediaQuery("min-width:600px"); 

  return (
      <VStack p="5" ml={isNotSmallerscr?"8":"5"} mr={isNotSmallerscr?"8":"5"}>
        <Flex w="100%">
          <Heading size="md" mt="2" cursor="pointer" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' onClick={() =>window.open("https://github.com/Mahir-Neema/portfolio_website_chakra_ui")}>Source code</Heading>
          <Spacer></Spacer>
          <IconButton icon={<FaLinkedin/>}  isRound={true} onClick={() =>window.open("https://www.linkedin.com/in/mahir-neema-55b66319a/")}></IconButton>
          <IconButton ml="2" icon={<FaGithub/>}  isRound={true} onClick={() =>window.open("https://github.com/Mahir-Neema")}></IconButton>
          <IconButton ml="2" icon={<FaTwitterSquare/>}  isRound={true} onClick={() =>window.open("https://twitter.com/NeemaMahir")}></IconButton>
          <IconButton ml="8" icon={isDark?<FaSun/>:<FaMoon/>} isRound={true} onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header/>
        <Profile/>
      </VStack>
  );
}

export default App;