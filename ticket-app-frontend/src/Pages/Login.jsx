import { Box, Button, Heading, Input, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

  // useNavigate for redirecting to another page and intialize [email, password] state for login
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 3. Consume Context Here
  const { login, authDetails: { isLoggedIn } } = useContext(AuthContext);

  // 4. Implement login functionality here by calling login function from AuthContextProvider with received token
  const handleLogin = async () => {
    try {
      const response = await axios.post(`https://reqres.in/api/login`, {
        email,
        password
      });
      login(response.data.token);
      const { data: { token } } = response;

      if (response.status === 200 || isLoggedIn === true) {
        localStorage.setItem('token', token);
        toast.success("Login Successful ✅");
        navigate('/');
      } else {
        toast.error("Invalid credentials ❌");
      }

    } catch (error) {
      toast.error(`Something went wrong for the Login ❌: ${error}`);
    }
  };

  return (
    <Box bgGradient="linear(to-r, #191970, #4169E1)" minH='100vh' display="flex" justifyContent="center" alignItems="center" px={5}>

      <Box bg="white" p={8} borderRadius="lg" boxShadow="lg" w={["100%", "90%", "60%", "40%", "50%"]} maxW="500px" bgGradient="linear(to-r, teal.400, blue.500)">

        <Heading textAlign="center" as="h1" size="xl" mb={6} >Login Page!</Heading>

        <Flex direction="column" gap={5} align='center' justify='center'>

        {/* Email input here */}
          <Input required color="gray.700" placeholder="Enter Email Here" type="email" value={email} onChange={(event) => setEmail(event.target.value)}  _placeholder={{ color: "red.500" }} borderRadius="md" focusBorderColor="gay.500" boxShadow="md" p={4} />

          {/* Password input here */}
          <Input required color="gray.700" placeholder="Enter Password Here" type="password" value={password} onChange={(event) => setPassword(event.target.value)}  _placeholder={{ color: "red.500" }} borderRadius="md" focusBorderColor="gay.500" boxShadow="md" p={4} />

          {/* Login button here */}
          <Button onClick={handleLogin} background='red.300' variant="solid" borderRadius="md" boxShadow="md" width='50%' mt={4} p={5} _hover={{ bg: "red.400", transform: "scale(1.05)" }}>LOGIN</Button>

        </Flex>
      </Box>
    </Box>
  );
}

export default Login;


