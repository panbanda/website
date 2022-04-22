import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { VStack, Box, IconButton, Icon } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { BiWinkSmile } from "react-icons/bi";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lalezar"
        />
      </Head>
      <VStack
        bgGradient="linear(to-bl, red.600, orange.400)"
        clipPath="polygon(2% 1%, 96% 2%, 106% 90%, 4% 110%)"
        color="white"
        fontFamily="Lalezar"
        fontSize={60}
        spacing={20}
        h="100vh"
        alignItems="center"
        justifyContent="center"
      >
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
    </>
  );
};

export default Home;
