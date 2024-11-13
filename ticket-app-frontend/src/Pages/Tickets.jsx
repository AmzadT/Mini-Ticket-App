import { Button, Container, Flex, SimpleGrid, Select, Box, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingIndicator from '../Components/LoadingIndicator';
import ErrorIndicator from '../Components/ErrorIndicator';
import TicketCard from '../Components/TicketCard';
import { toast } from 'react-toastify';

const Tickets = () => {

  // state variables for tickets
  const navigate = useNavigate();
  const [loadding, setLoadding] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(false);
  const [sortOrderValue, setSortOrderValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  // fetch and update tickets data when component mounts
  const FetchAndUpdateData = async (sortOrderValue, filterValue) => {
    setLoadding(true);
    try {
      let queryParams = {};

      if (filterValue) {
        queryParams.status = filterValue;
      }
      if (sortOrderValue) {
        queryParams._sort = 'priority';
        queryParams._order = sortOrderValue;
      }

      // fetch tickets data from the API
      const response = await axios.get(`http://localhost:3000/tickets`, {
        params: queryParams
      });

      setTickets(response.data);
      setLoadding(false);

    } catch (error) {
      toast.error('Something went wrong', error);
      setError(true);
      setLoadding(false);
    }
  };

  // useEffect hook to fetch and update tickets data whenever sortOrderValue or filterValue changes
  useEffect(() => {
    FetchAndUpdateData(sortOrderValue, filterValue);
  }, [sortOrderValue, filterValue]);

  // loading indicator
  if (loadding) {
    return <LoadingIndicator />;
  }

  // error indicator
  if (error) {
    return <ErrorIndicator />;
  }

  return (

    <Box bgGradient="linear(to-r, #191970, #4169E1)" minH="100vh" p={4}>
      <Container maxW="container.xl">

        {/* Heading */}
        <Heading as="h1" size={{ base: 'lg', md: 'xl' }} color="white" textAlign="center" mt='70px'>
          Tickets Page!
        </Heading>

        {/* Sorting and Filtering */}
        <Flex flexDirection={{ base: 'column', md: 'row', lg: 'row' }} justify="center" my={10} alignItems="center" gap={5} p={{ base: 2, md: 4, lg: 6 }} >

          {/* Sort By Priority */}
          <Select fontWeight="semibold" placeholder="Sort By Priority" variant="outline" bg="gray.300" color="black" cursor="pointer" value={sortOrderValue} onChange={(e) => setSortOrderValue(e.target.value)} flexBasis={{ base: '20%', md: '20%', lg: '20%' }} width={{ base: '50%', sm: '40%', md: '50%', lg: '30%' }}  height={{ base: '40px', md: '45px', lg: '50px' }} fontSize={{ base: '10px', md: '14px',sm:"13px", lg: '16px' }} >
            <option value="asc">Low To High</option>
            <option value="desc">High To Low</option>
          </Select>

          {/* Tickets Create Button */}
          <Button variant="outline" colorScheme="gray" fontWeight="semibold" _hover={{ bg: "green.300", transform: "scale(1.05)", border: 'none' }} onClick={() => navigate('/ticket/create')} width={{ base: '40%', sm: '40%', md: '20%' }}  height={{ base: '40px', md: '45px', lg: '50px' }}  fontSize={{ base: '12px', sm:"13px", md: '14px', lg: '16px' }} >Create Tickets</Button>

          {/* Filter By Status */}
          <Select fontWeight="semibold" placeholder="Filter By Status" variant="outline" color="black" bg="red.300" cursor="pointer" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} flexBasis={{ base: '20%', md: '20%', lg: '20%', }} width={{ base: '50%', sm: '40%', md: '40%', lg: '30%' }}  height={{ base: '40px', md: '45px', lg: '50px' }} fontSize={{ base: '10px', md: '14px',sm:"13px", lg: '16px' }}  >
            <option value="pending">Pending</option>
            <option value="progress">Progress</option>
            <option value="completed">Completed</option>
          </Select>
        </Flex>

        {/* Tickets Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
          {tickets.map((ticket) => (
            <TicketCard {...ticket} key={ticket.id} />
          ))}
        </SimpleGrid>

      </Container>
    </Box>
  );
};

export default Tickets;
