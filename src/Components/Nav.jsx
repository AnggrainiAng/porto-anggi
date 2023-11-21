import { Box, Flex, Heading, Link } from "@chakra-ui/react";

function Nav() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      fontSize={"15px"}
      padding={"25px"}
      position={"fixed"}
      width={"100%"}
      backgroundColor={"#222222"}
      color={"white"}
    >
      <Heading textTransform={"uppercase"}>DevFolio</Heading>
      <Flex
        display={"flex"}
        justifyContent={"space-between"}
        textTransform={"uppercase"}
        width={"30%"}
      >
        <Link href="#about">About Me</Link>
        <Link href="#portofolio">Portofolio</Link>
        <Link href="#skills">Skills</Link>
      </Flex>
    </Box>
  );
}
export default Nav;
