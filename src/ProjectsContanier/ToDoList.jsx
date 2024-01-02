import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  CardBody,
  CardHeader,
  CloseButton,
  Radio,
} from "@chakra-ui/react";
import "../Style/ToDoList.css";
import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  function addTask() {
    setTasks([
      ...tasks,
      {
        title: task,
      },
    ]);
    setTask("");
  }
  return (
    <div>
      <Box bg={"red.50"} h={"100vh"}>
        <Box className="mainDiv">
          <Box>
            <Heading textAlign={"center"}>ToDo-List</Heading>
            <Box p={2}>
              <HStack justifyContent={"center"}>
                <Input
                    className="taskInput"
                  placeholder="Enter your Todays Task..."
                  w={"50%"}
                  value={task}
                  onChange={(e) => {
                    setTask(e.target.value);
                  }}
                ></Input>
                <Button onClick={addTask} colorScheme="purple">
                  Add
                </Button>
              </HStack>
            </Box>

            <Box overflow={"auto"} h={"80vh"}>
              {tasks.map((item, index) => (
                <ToDoListCard key={index} title={item.title} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

function ToDoListCard(props) {
  return (
    <>
      <VStack m={2}>
        <Card  w={"60%"} h={"auto"} className="card">
          <HStack p={2} justifyContent={"space-between"}>
            <HStack justifyContent={"space-around"}>
              <Box>
                <Heading size="md" p={3}>
                  {props.title}
                </Heading>
              </Box>
            </HStack>
            <Box>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
              />
            </Box>
          </HStack>
        </Card>
      </VStack>
    </>
  );
}

export default ToDoList;
