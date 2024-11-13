import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";
import { Container, Heading, Input, Textarea, Select, Flex, Button, Box, Card } from "@chakra-ui/react";
import { toast } from "react-toastify";

const TicketEdit = () => {

  // get ticket id from route params / state variables for ticket editing
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState({});
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  // initial state for form inputs get the tickets data here with axios mehtod get req.
  const fetchAndUpdateData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/tickets/${id}`);
      setTicket(response.data);
      setLoading(false);
    } catch (error) {
      toast.error(`Error fetching data : ${error}`);
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);

  // loading handling indicator
  if (loading) {
    return <LoadingIndicator />;
  }

  // error handling indicator
  if (err) {
    return <ErrorIndicator />;
  }

  // handle form submission for ticket editing with axios and method patch
  const handleEditTickets = async () => {
    setLoading(true);
    try {
      const updatedTicket = {
        title: ticket.title,
        description: ticket.description,
        status: ticket.status,
        priority: ticket.priority,
        assignee: ticket.assignee,
      };
      const response = await axios.patch(`http://localhost:3000/tickets/${id}`, {
        data: updatedTicket
      });

      // response status is 200 then redirect user to tickets page
      if (response.status == 200) {
        navigate(`/tickets`);
      }
    } catch (error) {
      toast.error(error);
      setErr(true);
      setLoading(false);
    }
  };

  // De-Structuring values from ticket / (state value)
  const { title, status, priority, description, assignee } = ticket;

  return (

    <Box bgGradient="linear(to-r, #191970, #4169E1)" minH="100vh">
      <Container maxW="container.lg" p={[4, 6, 8]} minH="100vh">

        {/* Ticket Heading */}
        <Heading mb={7} mt='50' marginTop={{ "base": '70px' }} align="center" size={{ base: "lg", md: "xl" }} color="white">Edit Ticket!</Heading>

        <Card p={10}>

          {/* Ticket Details input field */}
          <Input required mt={10} value={title} variant="outline" placeholder="Enter Title" onChange={(e) => setTicket({ ...ticket, title: e.target.value })} size={["sm", "md", "lg"]} mb={5} />

          {/* Description textarea field */}
          <Textarea required placeholder="Write Description Here" value={description} onChange={(e) => setTicket({ ...ticket, description: e.target.value })} size={["sm", "md", "lg"]} mb={5} />

          <Flex direction={{ base: "column", md: "row" }} gap={5} mb={5} align='center' justify='center'>

            {/* Assignee Select */}
            <Select variant="outline" placeholder="Assignee" value={assignee} onChange={(e) => setTicket({ ...ticket, assignee: e.target.value })} bg="blue.300" color="black" fontWeight="semibold" cursor="pointer" flexBasis={{ base: '20%', md: '20%', lg: '20%', }} width={{ base: '40%', sm: '40%', md: '40%', lg: '30%' }} height={{ base: '40px', md: '45px', lg: '50px' }} fontSize={{ base: '10px', md: '14px', sm: "10px", lg: '16px' }}>
              <option value="Amzad">Amzad</option>
              <option value="Vicky">Vicky</option>
              <option value="Faiz">Faiz</option>
              <option value="Shahbaz">Shahbaz</option>
              <option value="Sahid">Sahid</option>
            </Select>

            {/* Status Select */}
            <Select variant="outline" placeholder="Status" value={status} onChange={(e) => setTicket({ ...ticket, status: e.target.value })} bg="gray.400" color="black" fontWeight="semibold" cursor="pointer" flexBasis={{ base: '20%', md: '20%', lg: '20%', }} width={{ base: '40%', sm: '40%', md: '40%', lg: '30%' }} height={{ base: '40px', md: '45px', lg: '50px' }} fontSize={{ base: '10px', md: '14px', sm: "10px", lg: '16px' }}>
              <option value="pending">Pending</option>
              <option value="progress">Progress</option>
              <option value="completed">Completed</option>
            </Select>

            {/* Priority Select */}
            <Select variant="outline" placeholder="Priority" value={priority} onChange={(e) => setTicket({ ...ticket, priority: Number(e.target.value) })} bg="red.300" color="black" fontWeight="semibold" cursor="pointer" flexBasis={{ base: '20%', md: '20%', lg: '20%', }} width={{ base: '40%', sm: '40%', md: '40%', lg: '30%' }} height={{ base: '40px', md: '45px', lg: '50px' }} fontSize={{ base: '10px', md: '14px', sm: "10px", lg: '16px' }}>
              {[...Array(10).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Select>

          </Flex>

          {/* update ticket button */}
          <Box mt={[8, 10]} textAlign="center">
            <Button variant="outline" _hover={{ bg: "blue.300", transform: "scale(1.05)", border: "none", color: "black" }} colorScheme="blue" onClick={handleEditTickets} size={["sm", "md", "lg"]}>Update Ticket</Button>
          </Box>

        </Card>
      </Container>
    </Box>
  );
};

export default TicketEdit;
