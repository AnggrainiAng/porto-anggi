import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import fotoAnggi from "../assets/images/anggraini.png";
function Description() {
  return (
    <Flex
      padding={"25px"}
      paddingTop={"100px"}
      backgroundColor={"#1b1b1b"}
      color={"white"}
      id="about"
    >
      <Box width={"70%"}>
        <Heading paddingBottom={"10px"}>Hello, {"I'am"}</Heading>
        <Text paddingBottom={"20px"} color={"#f9056a"} fontWeight={"bold"}>
          Front-end Developer
        </Text>
        <Text lineHeight={"25px"} paddingBottom={"30px"}>
          Experienced web developer crafting seamless online experiences.
          Turning ideas into interactive realities with precision and passion
        </Text>
        <Button marginRight={"25px"} border={"solid red"} position={"static"}>
          Download CV
        </Button>
        <Button border={"solid red"} position={"static"}>
          Contact
        </Button>
        <Flex paddingTop={"20px"} justifyContent={"space-between"} width="10%">
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
        </Flex>
      </Box>
      <Box>
        <Image
          src={fotoAnggi}
          alt="potrait photo"
          height={"200px"}
          width={"200px"}
          objectFit={"cover"}
          borderRadius={"100%"}
        />
      </Box>
    </Flex>
  );
}

export default Description;
