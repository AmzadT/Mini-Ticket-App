import { Box, Heading, Card, Image, Stack, CardBody, Text, CardFooter, Button, Flex, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const About = () => {

  // useNavigate for redirecting to another page
  const navigate = useNavigate();

  return (
    <Box bgGradient="linear(to-r, #191970, #4169E1)" minH="100vh" width='100%' p={{ base: 5, md: 10 }}>

      {/* About Heading */}
      <Heading as='h1' size={{ base: 'lg', md: 'xl' }} color='white' mb={5} mt='50px' marginTop={{ "base": '70px' }} textAlign='center'>
        About Our Tickets Creating App!
      </Heading>

      <Container maxW='container.xl' p={{ base: 2, md: 5 }}>

        <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline' borderColor='green.500' width='100%' boxShadow='lg' borderRadius='md'>

          {/* Image on the left side */}
          <Image
            width={{ base: '100%', md: '50%' }}
            height={{ base: '50vh', md: 'auto' }}
            src='https://static.vecteezy.com/system/resources/previews/022/119/121/non_2x/ticket-icon-line-raffle-ticket-symbol-trendy-flat-outline-ui-sign-design-thin-linear-graphic-pictogram-for-web-site-mobile-application-logo-illustration-eps10-free-vector.jpg'
            alt='Ticket Management'
            borderRadius='md'
          />

          <Stack spacing={6} p={{ base: 4, md: 8 }} justify='center'>

            {/* Card body with some texts */}
            <CardBody>
              <Heading size='lg' color='black'>The Perfect Solution!</Heading>
              <Text py='3' color='gray.600' fontSize={{ base: 'sm', md: 'md' }}>
                Welcome to our [Tickets Creating App], your go-to solution for managing and creating tickets seamlessly! Our app is designed to streamline the process of ticket creation, making it easier than ever for individuals and teams to manage events, tasks, or support tickets.
              </Text>

              <Heading size='md' color='black'>Our Mission!</Heading>
              <Text py='3' color='gray.600' fontSize={{ base: 'sm', md: 'md' }}>
                At [Tickets], our mission is to empower users with a simple yet powerful tool that enhances productivity and organization. We understand that effective ticket management is crucial for businesses, event organizers, and support teams. That's why we've built a platform that prioritizes user experience, allowing you to create, track, and manage tickets effortlessly.
              </Text>

              <Heading size='md' color='black'>Why Choose Us?</Heading>
              <Text py='3' color='gray.600' fontSize={{ base: 'sm', md: 'md' }}>
                [Tickets] is committed to providing a reliable, efficient, and enjoyable ticketing experience. Whether you’re managing support requests, organizing events, or tracking project tasks, our app is equipped to handle it all. With ongoing updates and new features based on user feedback, we strive to continuously improve and meet the evolving needs of our community.
              </Text>

              <Heading size='md' color='black'>Join Us!</Heading>
              <Text py='3' color='gray.600' fontSize={{ base: 'sm', md: 'md' }}>
                We invite you to join our growing community of users who are transforming the way they manage tickets. Sign up today and experience the simplicity and efficiency of [Tickets-App]!
              </Text>
            </CardBody>

            {/* Button to navigate to tickets page */}
            <CardFooter>
              <Flex justify='center' width='100%'>
                <Button onClick={() => navigate('/tickets')} colorScheme="green" size="lg" borderRadius="md" boxShadow="lg" _hover={{ bg: "green.400", transform: "scale(1.05)" }}
                >Get Started!</Button>
              </Flex>
            </CardFooter>

          </Stack>

        </Card>

      </Container>
    </Box>
  );
};

export default About;
