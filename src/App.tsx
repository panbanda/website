import Typewriter from "typewriter-effect";
import {
  Link,
  VStack,
  Box,
  IconButton,
  HStack,
  Icon,
  Container,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { extendTheme, ThemeProvider, CSSReset } from "@chakra-ui/react";

const theme = extendTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <VStack
        p={20}
        bgGradient="linear(to-bl, red.600, orange.400)"
        clipPath="polygon(2% 1%, 96% 2%, 106% 90%, 4% 110%)"
        color="white"
        fontFamily="Lalezar"
        textAlign="center"
        fontSize={60}
        spacing={20}
        h="100vh"
        alignItems="center"
        lineHeight="110%"
        justifyContent="center"
      >
        <HStack>
          <Icon mt={-10} as={ImQuotesLeft} fontSize={30} />
          <Box
            as={Typewriter}
            options={{
              strings: [
                "باب النجار مخلع",
                "The door of the carpenter is off its hinges",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <Icon mt={-10} as={ImQuotesRight} fontSize={30} />
        </HStack>
        <Link href="https://www.linkedin.com/in/jonathanreyes/">
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            fontSize={50}
            p={10}
            _hover={{ bg: "white", color: "blue.400" }}
          />
        </Link>
      </VStack>
    </ThemeProvider>
  );
}

export default App;
