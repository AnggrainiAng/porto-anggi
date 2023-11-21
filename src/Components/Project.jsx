import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

function Project() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      padding={"10px"}
      backgroundColor={"#1b1b1b"}
      color={"white"}
      id="portofolio"
    >
      <Heading paddingBottom={"25px"} color={"#f9056a"}>
        SEE MY LATEST WORK
      </Heading>
      <Text paddingBottom={"30px"}>
        Explore my Full Stack web projects, showcasing my creativity and
        technical expertise. From front-end design to bacl-end functionally,
        witness my journey in crafting innovative web solutions.
      </Text>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card position={"static"}>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card position={"static"}>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default Project;
