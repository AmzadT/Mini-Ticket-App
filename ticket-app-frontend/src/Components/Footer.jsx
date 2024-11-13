import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box background="gray.200" p={2} width="100%" >
      <Text textAlign="center" color="black" fontWeight="semibold" fontSize={["sm", "md", "lg"]}
      >© 2024 Ticket App. All rights reserved!</Text>
    </Box>
  );
};

export default Footer;
