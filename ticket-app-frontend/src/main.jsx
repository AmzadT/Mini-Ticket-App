import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Context/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    // Wrapping here the App component in the AuthContextProvider and BrowserRouter
    <AuthContextProvider>
        <BrowserRouter>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </AuthContextProvider>
)
