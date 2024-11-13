import { Box, Button, Flex, Link as ChakraLink, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

// Navbar component with links to different routes and logout button
const links = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/tickets', label: 'TICKETS' },
  { to: '/login', label: 'LOGIN' },
];

const Navbar = () => {

  const { logout } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex position="fixed" top={0} height={{ base: '50px', md: '60px', lg: '65px' }} left={0} right={0} zIndex={1} align='center' justify='space-between' bg='gray.500' color='white' fontWeight='semibold' p={2} wrap="wrap" >

      {/* Navbar Logo */}
      <Box>
        <Link to="/">
          <Box
            as="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kwLPpv_WtZ_q0MnKhUsvNwNCSwLIpVDxrVyXQC5ecGwQHXvnai3l8kGl1hiIG7BXHZ4&usqp=CAU"
            alt="Logo"
            borderRadius="50%"
            ml="10px"
            width={{ base: '35px', md: '50px' }}
            height={{ base: '35px', md: '50px' }}
            mt={{base: '-1px'}}
          />
        </Link>
      </Box>



      {/* Desktop Links */}
      <Flex display={['none', 'none', 'flex']} alignItems='center'>
        {links.map((link) => (
          <ChakraLink as={Link} to={link.to} key={link.to} mx={5} _hover={{ color: 'gray.300' }}
          >{link.label}</ChakraLink>
        ))}


        {/* Logout Button */}
        <Button onClick={logout} variant='outline' colorScheme="gray" ml='100px' mr='50px' _hover={{ bg: "red.300", border: 'none' }} style={{ transition: 'all 0.3s ease', width: '100px', height: '40px' }}
        >LOGOUT</Button>
      </Flex>


      {/* Mobile Menu Button */}
      <IconButton style={{ marginRight: '10px', fontWeight: 'bold',  }} fontSize={{base: '25px', md: '30px'}} mt={{base: '-2px'}} display={['flex', 'flex', 'none']} icon={<HamburgerIcon />} onClick={onOpen} aria-label="Open Menu" variant='ghost'
      />


      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color='black' fontFamily='cursive' fontStyle='oblique' fontWeight='medium'>
          <DrawerCloseButton color='black' size='md' fontWeight='semibold' border='1px solid black' borderRadius='50%' mt={1} ml={2} />
          <DrawerHeader fontWeight='semibold'>Menu</DrawerHeader>
          <DrawerBody background='blackAlpha.200'>
            <Flex direction="column" align="center">
              {links.map((link) => (
                <ChakraLink as={Link} to={link.to} key={link.to} my={2} onClick={onClose} _hover={{ textDecoration: 'underline', color: 'gray.600' }}
                >{link.label}</ChakraLink>
              ))}
              <Button onClick={() => { logout(); onClose(); }} variant='outline' colorScheme="red" _hover={{ bg: "red.300", border: 'none' }} my={2} style={{ transition: 'all 0.3s ease', width: '100px', height: '40px' }}
              >LOGOUT</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Navbar;
