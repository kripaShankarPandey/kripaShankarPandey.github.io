import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  Text,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import Resume from "../Utils/resume.pdf";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["Home", "About Me", "Skills", "Projects", "Contact", "Resume"];

const id = ["#home", "#about", "#skills", "#projects", "#contact", "_blank"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        px={4}
        position="sticky"
        top="0px"
        zIndex="20"
        id="nav-menu"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"center"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text
            mr={{ md: "12px", lg: "15px" }}
            fontWeight={"medium"}
            fontSize="xl"
          >
            {"<Kripa/>  "}
          </Text>
          <HStack spacing={8} alignItems={"center"} justifyContent="center">
            {/* <Box>Logo</Box> */}
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              fontWeight="600"
            >
              <a href="#home" className="nav-link home">
                <Text fontSize="xl">Home</Text>
              </a>
              <a href="#about" className="nav-link about">
                <Text fontSize="xl">About Me</Text>
              </a>
              <a href="#skills" className="nav-link skills">
                <Text fontSize="xl">Skills</Text>
              </a>
              <a href="#projects" className="nav-link projects">
                <Text fontSize="xl">Projects</Text>
              </a>
              <a href="#contact" className="nav-link contact">
                <Text fontSize="xl">Contact</Text>
              </a>
              {/* /////


              <a href="image.jpg" download target="_blank" onclick="window.open('https://www.google.com', '_blank');">Download Image and open Google.com</a>

              ///// */}
              {/* <a
                target="_blank"
                href="https://drive.google.com/file/d/1niTBKlvqoFtdvpheVtpNkj6W48qBYOzB/view?usp=sharing"
              > */}
              <a
                className="nav-link resume"
                href={Resume}
                download="Kirpa_Shankar_Pandey"
                // onClick={window.open(
                //   "https://drive.google.com/file/d/1niTBKlvqoFtdvpheVtpNkj6W48qBYOzB/view?usp=sharing",
                //   "_blank"
                // )}
              >
                <Text fontSize="xl">Resume</Text>
              </a>
            </HStack>
          </HStack>
          <Spacer />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <a href="#home">
                <Button
                  bgColor={"transparent"}
                  onClick={isOpen ? onClose : onOpen}
                  fontSize="2xl"
                >
                  Home
                </Button>
              </a>
              <a href="#about">
                <Button
                  bgColor={"transparent"}
                  onClick={isOpen ? onClose : onOpen}
                  fontSize="2xl"
                >
                  About Me
                </Button>
              </a>
              <a href="#skills">
                <Button
                  bgColor={"transparent"}
                  onClick={isOpen ? onClose : onOpen}
                  fontSize="2xl"
                >
                  Skills
                </Button>
              </a>
              <a href="#projects">
                <Button
                  bgColor={"transparent"}
                  onClick={isOpen ? onClose : onOpen}
                  fontSize="2xl"
                >
                  Projects
                </Button>
              </a>
              <a href="#contact">
                <Button
                  bgColor={"transparent"}
                  onClick={isOpen ? onClose : onOpen}
                  fontSize="2xl"
                >
                  Contact
                </Button>
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/drive/u/2/my-drive"
              >
                <Button
                  bgColor={"transparent"}
                  onClick={isOpen ? onClose : onOpen}
                  fontSize="2xl"
                >
                  Resume
                </Button>
              </a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
