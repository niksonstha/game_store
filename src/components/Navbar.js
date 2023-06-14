import { Flex, Image, Input } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "./Context";

function Navbar() {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Flex
      height="100px"
      width="100%"
      bgColor="black"
      align="center"
      justify="space-between"
      position="fixed"
      top="0"
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
        type="text"
        width="15%"
        placeholder="Search for games"
        _placeholder={{ opacity: 0.8, color: "white" }}
        color="white"
        borderRadius="50px"
        isInvalid
        errorBorderColor="crimson"
        focusBorderColor="green.400"
        textAlign="center"
        mr={5}
        value={searchTerm}
        onChange={handleSearch}
      />
    </Flex>
  );
}

export default Navbar;
