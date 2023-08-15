import React from "react";
import {
  FormControl,
  Input,
  Container,
  Box,
  Button,
  FormHelperText,
  Center,
} from "@chakra-ui/react";

function Form() {
  return (
    <Container size="sm" mt="50" boxShadow="dark-lg" p={10}>
      <Box my={5}>
        <FormControl>
          <Input placeholder="User Name" variant="flushed" />
        </FormControl>
      </Box>
      <Box my={5}>
        <FormControl>
          <Input placeholder="Password" variant="flushed" />
          <FormHelperText>Enter Password </FormHelperText>
        </FormControl>
      </Box>
      <Box>
        <Center>
          <Button colorScheme="green" variant="outline">
            Login
          </Button>
        </Center>
      </Box>
    </Container>
  );
}

export default Form;
