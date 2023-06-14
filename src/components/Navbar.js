import { Flex, Image, Input } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      height="100px"
      width="100%"
      bgColor="black"
      align="center"
      justify="space-between"
      position="fixed"
    >
      <Image
        src="https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg"
        alt="Dan Abramov"
        color="black"
        borderRadius="full"
        boxSize="60px"
        ml={5}
      />

      <Input
        width="15%"
        placeholder="search for games"
        _placeholder={{ opacity: 0.8, color: "white" }}
        color="white"
        borderRadius="50px"
        isInvalid
        errorBorderColor="crimson"
        focusBorderColor="green.400"
        textAlign="center"
        mr={5}
      />
    </Flex>
  );
}

export default Navbar;
