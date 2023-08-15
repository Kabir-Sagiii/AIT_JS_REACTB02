import React from "react";
import { Button } from "@chakra-ui/react";

function ButtonComp() {
  return (
    <div>
      <Button colorScheme="green">Chakra UI </Button>
      <Button size="xs" colorScheme="red" variant="outline">
        Chakra UI{" "}
      </Button>
      <Button size="lg" colorScheme="red">
        Chakra UI{" "}
      </Button>
      <Button size="sm" colorScheme="red" variant="outline">
        Chakra UI{" "}
      </Button>
    </div>
  );
}

export default ButtonComp;
