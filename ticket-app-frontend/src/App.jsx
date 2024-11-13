import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TitleImage from './Components/TitleImage';

function App() {

  return (
    <div>
      <TitleImage />
      <ToastContainer autoClose={3000} />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
