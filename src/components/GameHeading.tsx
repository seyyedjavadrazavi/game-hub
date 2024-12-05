import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuary: GameQuery;
}

const GameHeading = ({ gameQuary }: Props) => {
  const heading = `${gameQuary.platform?.name || ""} ${
    gameQuary.genre?.name || ""
  } Games`;
  //   console.log(gameQuary.genre?.name);
  return (
    <Heading as={"h2"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
