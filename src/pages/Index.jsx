import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, NumberInput, NumberInputField, VStack, Text } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const Index = () => {
  const [length, setLength] = useState("");
  const [current, setCurrent] = useState("");
  const [voltageDrop, setVoltageDrop] = useState("");

  const calculateCableSize = () => {
    // Simple formula to calculate cable size
    // This is a placeholder formula and should be replaced with actual calculation logic
    const size = (current * length) / 20;
    setVoltageDrop(size.toFixed(2));
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Cable Size Calculator
        </Heading>
        <FormControl>
          <FormLabel htmlFor="length">Cable Length (in meters)</FormLabel>
          <NumberInput min={1} onChange={(valueString) => setLength(parseFloat(valueString))}>
            <NumberInputField id="length" placeholder="Enter length" />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="current">Current (in amperes)</FormLabel>
          <NumberInput min={1} onChange={(valueString) => setCurrent(parseFloat(valueString))}>
            <NumberInputField id="current" placeholder="Enter current" />
          </NumberInput>
        </FormControl>
        <Button leftIcon={<FaCalculator />} colorScheme="blue" onClick={calculateCableSize}>
          Calculate
        </Button>
        {voltageDrop && (
          <Box>
            <Text fontSize="lg">Recommended Cable Size:</Text>
            <Text fontSize="2xl" fontWeight="bold">
              {voltageDrop} mm²
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
