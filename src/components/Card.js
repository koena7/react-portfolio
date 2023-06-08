import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import p1 from "../images/photo1.jpg"

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
    <VStack backgroundColor="white" textColor="black" borderRadius="10px" >
      <Image src={imageSrc} boxSize="full" borderRadius="10px"/>
      <div style={{padding:'10px'}}>
        <Heading padding="5px" as="h6" size="md">{title}</Heading>
        <Text padding="5px">{description}</Text>
        <HStack padding="5px" justifyContent="flex-start" >
          <Text>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </div>
    </VStack>
  );
};

export default Card;
