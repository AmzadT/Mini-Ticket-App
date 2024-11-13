import { CircularProgress, Box } from '@chakra-ui/react'

const LoadingIndicator = () => {
  return (
    <Box align='center' justify='center' mt={100}>
      <CircularProgress isIndeterminate color='green.500' size='70px' />
    </Box>
  )
}

export default LoadingIndicator