import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Skills() {
  return (
    <Flex
      padding={"25px"}
      justifyContent={"space-between"}
      backgroundColor={"#222222"}
      color={"white"}
      id="skills"
      wrap={"wrap"}
    >
      <Box width={{ base: "100%", md: "45%" }} paddingRight={"20px"} mb="16px">
        <Text paddingBottom={"10px"} color={"#f9056a"} fontWeight={"bold"}>
          MY SKILLS
        </Text>
        <Heading paddingBottom={"25px"}>
          I excel in my field, and i have a deep passion for what I do.
        </Heading>
        <Text paddingBottom={"20px"}>
          Explore My Skills: A versatile blend of creative design, coding
          proficiency, and effective communication.
        </Text>
        <Text>Discover how i bring ideas to life</Text>
      </Box>

      <Box
        width={{ base: "100%", md: "55%" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        padding-md={"40px"}
        padding-base={"100%"}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text> Front-end Development</Text>
          <Text> 80%</Text>
        </Box>
        <Box border={"solid"}>
          <Box border={"solid red"} width={"80%"}></Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text> Back-end Development</Text>
          <Text>78%</Text>
        </Box>
        <Box border={"solid"}>
          <Box border={"solid red"} width={"78%"}></Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text> Graphic Desaign</Text>
          <Text>60%</Text>
        </Box>

        <Box border={"solid"}>
          <Box border={"solid red"} width={"60%"}></Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text> Data Structure & Algo</Text>
          <Text> 30%</Text>
        </Box>
        <Box border={"solid"}>
          <Box border={"solid red"} width={"30%"}></Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Skills;
