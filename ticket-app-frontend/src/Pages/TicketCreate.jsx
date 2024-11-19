import { Container, Heading, Input, Textarea, Select, Flex, Button, Box, Card } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TicketCreate = () => {

  // State variables for form inputs 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const navigate = useNavigate();

  // Handle form submission and create a new ticket in the database (db.json)
  const handleCreateTickets = async () => {
    try {
      const newTicket = {
        title: title,
        description: description,
        assignee: assignee,
        status: status,
        priority: priority
      };

      // Send the new ticket to the db.json using axios
      const response = await axios.post(`https://tickets-backend-c9xy.onrender.com/tickets`, { 
        data: newTicket
      });

      // Redirect to the tickets list page if the ticket creation is successful
      if (response.status == 201) {
        navigate(`/tickets`);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box bgGradient="linear(to-r, #191970, #4169E1)" width='100%' minH="100vh">

      <Container maxW="container.lg" p={[4, 6, 8]} >

        <Heading as='h1' size={{ base: 'lg', md: 'xl' }} color='white' mb={7} mt='50px' textAlign='center' marginTop={{"base": '70px'}}>Create Tickets!</Heading>

        <Card p={10} >

          {/* Title Input */}
          <Input required mb={3} value={title} variant="outline" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} size={["sm", "md", "lg"]}
          />

          {/* Description Textarea */}
          <Textarea required my={3} placeholder="Write Description Here" value={description} onChange={(e) => setDescription(e.target.value)} size={["sm", "md"]}/>

          {/* Assignee, Status, and Priority Selects */}
          <Flex my={3} direction={["column", "row"]} gap={5} justify='center' align='center'>

            {/* Assignee Select */}
            <Select required variant="outline" cursor='pointer' color='black' fontWeight='semibold' bg='blue.300' placeholder="Assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)}  flexBasis={{ base: '20%', md: '20%', lg: '20%', }} width={{ base: '40%', sm: '40%', md: '40%', lg: '30%' }}  height={{ base: '40px', md: '45px', lg: '50px' }} fontSize={{ base: '10px', md: '14px',sm:"10px", lg: '16px' }}>
              <option value="Amzad">Amzad</option>
              <option value="Vicky">Vicky</option>
              <option value="Faiz">Faiz</option>
              <option value="Shahbaz">Shahbaz</option>
              <option value="Imran">Sahid</option>
            </Select>

            {/* Status Select */}
            <Select required variant="outline" placeholder="Status" cursor='pointer' color='black' fontWeight='semibold' bg='gray.400' value={status} onChange={(e) => setStatus(e.target.value)}  flexBasis={{ base: '20%', md: '20%', lg: '20%', }} width={{ base: '40%', sm: '40%', md: '40%', lg: '30%' }}  height={{ base: '40px', md: '45px', lg: '50px' }} fontSize={{ base: '10px', md: '14px',sm:"10px", lg: '16px' }}>
              <option value="pending">Pending</option>
              <option value="progress">Progress</option>
              <option value="completed">Completed</option>
            </Select>

            {/* Priority Select */}
            <Select required variant="outline" placeholder="Priority" cursor='pointer' color='black' fontWeight='semibold' bg='red.300' value={priority} onChange={(e) => setPriority(Number(e.target.value))}  flexBasis={{ base: '20%', md: '20%', lg: '20%', }} width={{ base: '40%', sm: '40%', md: '40%', lg: '30%' }}  height={{ base: '40px', md: '45px', lg: '50px' }} fontSize={{ base: '10px', md: '14px',sm:"10px", lg: '16px' }}>
              {[...Array(10).keys()].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </Select>

          </Flex>

          {/* Submit Button for creating a new ticket */}
          <Box mt={[8, 10]} textAlign="center">
            <Button variant="outline" _hover={{ bg: "red.300", transform: "scale(1.05)", border: 'none', color: 'black'}} colorScheme="red" onClick={handleCreateTickets} size={["sm", "md", "lg"]}
            >Create Ticket</Button>
          </Box>

        </Card>
      </Container>
    </Box>
  );
}

export default TicketCreate;
