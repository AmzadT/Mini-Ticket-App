import { Box, Button, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Text, CardFooter, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const TicketCard = ({ title, id, status, priority }) => {
  const navigate = useNavigate();

  // Assign color based on the status
  const statusColor = status === 'completed' ? 'green.500' : status === 'progress' ? 'yellow.500' : 'blue.500';

  return (
    <Card borderRadius="none" borderTopLeftRadius="30px" borderBottomRightRadius="30px" mb={5} _hover={{ transform: "scale(1.03)", transition: '0.3s' }}>

      {/* Tickets Image */}
      <Box display="flex" justifyContent="center">
        <Image
          src="https://img.freepik.com/premium-vector/ticket-icon-vector-illustration-logo-template_917138-2184.jpg?w=360"
          w="130px"
        />
      </Box>

      {/* Tickets Title */}
      <CardHeader>
        <Heading fontSize="lg" textAlign="center" mt={-8}>
          {title}
        </Heading>
      </CardHeader>
      <hr style={{ width: '86%', marginLeft: '20px', marginTop: '-15px' }} />

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">

          {/* Ticket Status and Priority */}
          <Box>
            <Heading textAlign="center" size="sm" textTransform="uppercase">
              Status
            </Heading>
            <Text textAlign="center" pt="2" fontSize="sm" fontWeight='semibold' color={statusColor}>
              {status}
            </Text>
          </Box>

          <Box>
            <Heading textAlign="center" size="xs" textTransform="uppercase">
              Priority
            </Heading>
            <Text textAlign="center" pt="2" fontSize="sm" fontWeight='semibold' color='black'>
              {priority}
            </Text>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter mt={-7} justify="center">
        <Button colorScheme="red" variant="outline" _hover={{ bg: 'red.300', color: 'black', border: 'none', transform: "scale(1.1)" }} onClick={() => navigate(`/ticket/view/${id}`)}>
          View Ticket
        </Button>
      </CardFooter>

    </Card>
  );
};

export default TicketCard;
