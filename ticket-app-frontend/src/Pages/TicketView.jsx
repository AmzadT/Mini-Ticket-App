import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Text, CardFooter, Flex } from '@chakra-ui/react';
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";

const TicketView = () => {

  // state variables 
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState({});
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  // function to fetch and update ticket data on component mount or id change
  const fetchAndUpdateData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/tickets/${id}`);
      console.log("Response Data:", response.data);
      setTicket(response.data);
      setLoading(false);

    } catch (error) {
      console.error("Error fetching data:", error);
      setErr(true);
      setLoading(false);
    }
  };

  // useEffect hook to fetch and update data when component mounts or id changes
  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);

  // loading indicator
  if (loading) {
    return <LoadingIndicator />;
  }

  // error indicator
  if (err) {
    return <ErrorIndicator />;
  }

  // Delete ticket function
  const DeleteTicket = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:3000/tickets/${id}`,
      });

      if (response.status == 200) {
        navigate(`/tickets`);
      }
      setLoading(false);

    } catch (error) {
      console.log(`Something Went Wrong ${error}`);
      setErr(true);
      setLoading(false);
    }
  };

  // De-Structuring value here from ticket (ticket state)
  const { title, status, priority, description, assignee } = ticket;

  // Assign color based on the status
  const statusColor = status === 'completed' ? 'green.500' : status === 'progress' ? 'yellow.500' : 'blue.500';

  return (
    <Box bgGradient="linear(to-r, #191970, #4169E1)" minH="100vh" width='100%' p={5}>

      {/* Heading */}
      <Heading as="h1" size={{ base: 'lg', md: 'xl' }} color="white" textAlign="center" mb={5} mt='70'>Ticket Details!</Heading>

      <Card m="auto" shadow="lg" p={5} borderRadius="md">

        {/* Card Header */}
        <CardHeader>
          <Heading size={["lg", "md"]} textAlign="center">{title}</Heading>
        </CardHeader>

        {/* Card Body */}
        <CardBody>
          <Stack divider={<StackDivider />} spacing={5}>

            {/* Ticket status */}
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Status
              </Heading>
              <Text pt={2} fontWeight='medium' fontSize={["sm", "md"]} color={statusColor}>
                {status}
              </Text>
            </Box>

            {/* Ticket priority */}
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Priority
              </Heading>
              <Text pt={2} fontWeight='medium' fontSize={["sm", "md"]}>
                {priority}
              </Text>
            </Box>

            {/* Ticket description */}
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Description
              </Heading>
              <Text pt={2} fontWeight='medium' fontSize={["sm", "md"]}>
                {description}
              </Text>
            </Box>

            {/* Ticket assignee */}
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Assignee
              </Heading>
              <Text pt={2} fontWeight='medium' fontSize={["sm", "md"]}>
                {assignee}
              </Text>
            </Box>

          </Stack>
        </CardBody>

        {/* Card Footer */}
        <CardFooter align="center" justify="center">

          {/* Update and Delete Button */}
          <Flex direction={["row", "row"]} gap={10} w="full" justify="center" align='center'>

            {/* update/edit button */}
            <Button colorScheme="blue" variant="outline" _hover={{ bg: "blue.300", transform: "scale(1.05)", border: 'none', color: 'black' }} onClick={() => navigate(`/ticket/edit/${id}`)} size={["sm", "md", "lg"]}
            >Edit Ticket</Button>

            {/* delete button */}
            <Button colorScheme="red" variant="outline" _hover={{ bg: "red.300", transform: "scale(1.05)", border: 'none', color: 'black' }} onClick={DeleteTicket} size={["sm", "md", "lg"]}
            >Delete Ticket</Button>

          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default TicketView;
