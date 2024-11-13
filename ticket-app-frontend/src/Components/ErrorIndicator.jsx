import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Spinner } from '@chakra-ui/react'

const ErrorIndicator = () => {

  return (
    <Box align='center' justify='center' mt={100}>

      <Spinner color='red.500' />
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
      </Alert>
      
    </Box>
  )
}

export default ErrorIndicator