import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box bgGradient="linear(to-r, #191970, #4169E1)" minH="100vh" width='100%' display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={5}>

      {/* Home Heading */}
      <Heading textAlign="center" as="h1" size="2xl" mb={6} color="white" textTransform="uppercase">
        Welcome to the Home Page!
      </Heading>

      {/* Button to navigate to tickets create page */}
      <Button onClick={() => navigate('/ticket/create')} colorScheme="green" variant="solid" size="lg" borderRadius="md" boxShadow="lg" _hover={{ bg: "green.400", transform: "scale(1.05)" }}
      >Go to Create Tickets</Button>

    </Box>
  );
}

export default Home;
