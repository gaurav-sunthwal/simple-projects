import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Stack,
  Image,
  Heading,
  Divider,
  ButtonGroup,
  Box,
  HStack,
} from "@chakra-ui/react";

import img1 from "../assets/project.avif";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Box p={5} bg={"#171717"} h={"auto"}>
      <HStack wrap={"wrap"} justifyContent={"center"}>
        <Homecard img={img1} name={"To Do List Project"} discription={"discription"} link={"/todolist"}/>
        <Homecard img={img1} name={"name"} discription={"discription"} link={"/chatApp"}/>
      </HStack>
    </Box>
  );
}
function Homecard(props) {
  return (
    <>
      <Card maxW="sm" m={2}>
        <CardBody>
          <Image
            src={props.img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{props.name}</Heading>
            <Text>{props.discription}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={props.link}>
              <Button variant="solid" colorScheme="blue">
                Check Out
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default Home;
