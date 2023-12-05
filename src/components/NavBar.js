import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProfileArray from "./ProfileArray";
const TbIcons = require("react-icons/tb");

export default function Nav({ color }) {
  const profile = ProfileArray();

  const colors = {
    "blue": "#3182CE",
    "cyan": "#00B5D8",
    "gray": "#718096",
    "green": "#38A169",
    "orange": "#DD6B20",
    "pink": "#D53F8C",
    "purple": "#805AD5",
    "red": "#E53E3E",
    "teal": "#319795",
    "yellow": "#D69E2E"
  };

  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const scrollToHero = () => {
    const heroSection = document.querySelector("#hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience");
    experienceSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const TbLetterComponents = [];

  for (let i = 0; i < profile.logo.length; i++) {
    const letter = profile.logo[i];
    const component = TbIcons[`TbLetter${letter}`];
    TbLetterComponents.push(component);
  }

  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Link onClick={scrollToHero}>
          <HStack>
            {TbLetterComponents.map((Component, index) => (
              <Component key={index} color={colors[color]} />
            ))}
          </HStack>
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost" onClick={scrollToAbout}>
                  About
                </Button>
                <Button variant="ghost" onClick={scrollToExperience}>
                  Experience
                </Button>
                <Button variant="ghost" onClick={scrollToProjects}>
                  Projects
                </Button>
                <Button variant="ghost" onClick={scrollToContact}>
                  Contact
                </Button>
              </>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={scrollToAbout}>
                        About
                      </Button>
                      <Button variant="ghost" onClick={scrollToExperience}>
                        Experience
                      </Button>
                      <Button variant="ghost" onClick={scrollToProjects}>
                        Projects
                      </Button>
                      <Button variant="ghost" onClick={scrollToContact}>
                        Contact
                      </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

// Using useState to manage scroll state: The useState hook is being used to manage whether the user has scrolled or not.

// const [scroll, setScroll] = useState(false);

// Using useColorMode to manage color mode: The useColorMode hook from Chakra UI returns the current color mode and a function to toggle the color mode.

// const { colorMode, toggleColorMode } = useColorMode();

// Using useDisclosure to manage drawer state: The useDisclosure hook from Chakra UI returns an object with isOpen, onOpen, and onClose properties. These can be used to manage the state of a disclosure component, like a drawer or dialog.

// const { isOpen, onOpen, onClose } = useDisclosure();

// Using useMediaQuery to check screen size: The useMediaQuery hook from Chakra UI returns a boolean array that represents whether the provided queries are matched.

// const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

// Defining scroll functions: These functions use the scrollIntoView method to smoothly scroll to different sections of the page when called.

// const scrollToHero = () => {
//   const heroSection = document.querySelector("#hero");
//   heroSection.scrollIntoView({ behavior: "smooth" });
// };
// ...

// Defining changeScroll function: This function checks if the user has scrolled more than 80 pixels from the top of the page. If they have, it sets scroll to true. Otherwise, it sets scroll to false.

// const changeScroll = () =>
//   document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
//     ? setScroll(true)
//     : setScroll(false);

// Adding a scroll event listener: This line adds an event listener that calls changeScroll whenever the user scrolls.

// window.addEventListener("scroll", changeScroll);

// Creating TbLetterComponents array: This loop creates an array of components from the TbIcons object. Each component corresponds to a letter in the profile.logo string.

// const TbLetterComponents = [];

// for (let i = 0; i < profile.logo.length; i++) {
//   const letter = profile.logo[i];
//   const component = TbIcons[`TbLetter${letter}`];
//   TbLetterComponents.push(component);
// }

// Returning the JSX: Finally, the Nav component returns the JSX that defines what it should render. This includes a Flex container that contains a Link and a Stack of Button components. The Button components either scroll to different sections of the page or toggle the color mode.

// return (
//   ...
// );