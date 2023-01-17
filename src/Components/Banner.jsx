import {
  Box,
  Image,
  Heading,
  HStack,
  Flex,
  Text,
  Button,
  VStack,
  Link,
} from "@chakra-ui/react";
import Resume from "../Utils/resume.pdf";
import Profile from "../Utils/profilePic.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
const Banner = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="70%"
      m="auto"
      mt="100px"
      gap="50px"
    >
      <Box data-aos="flip-left">
        <Image
          borderRadius="5%"
          boxSize="350px"
          src={Profile}
          alt="Profile Image"
        />
      </Box>
      <Box alignItems="flex-start">
        <Heading textAlign="left">Hello!</Heading>
        <Text
          fontWeight={"bold"}
          fontSize="xl"
          textAlign="left"
          lineHeight={"10"}
        >
          I'm Kripa Shankar Pandey
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize="xl"
          textAlign="left"
          lineHeight={"10"}
        >
          Full Stack Web Developer, Enthusiast to Learn New Technology
        </Text>
        <HStack mt={5} spacing={5}>
          <Link href="https://github.com/kripaShankarPandey">
            <BsGithub size={50} />
          </Link>
          <Link href="https://www.linkedin.com/in/kripa-pandey-9465b215a/">
            <BsLinkedin size={42} />
          </Link>
          <Link href="https://twitter.com/kirpa_pandey">
            <FaTwitterSquare size={50} />
          </Link>
        </HStack>
        <HStack mt={8}>
          <a href={Resume} download="Kripa_Shankar_Pandey">
            <Button colorScheme="teal" size="lg">
              DownLoad CV
            </Button>
          </a>

          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Banner;