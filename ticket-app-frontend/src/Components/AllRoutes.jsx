import { Route, Routes } from "react-router-dom"

// All Pages
import Home from "../Pages/Home"
import About from "../Pages/About"
import Login from "../Pages/Login"
import Tickets from "../Pages/Tickets"
import PrivateRoute from "./PrivateRoute"
import TicketCreate from '../Pages/TicketCreate'
import TicketView from '../Pages/TicketView'
import TicketEdit from '../Pages/TicketEdit'


const AllRoutes = () => {
  return (
    <div>
      <Routes>

        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/tickets" element={<PrivateRoute><Tickets /></PrivateRoute>} />
        <Route path='/ticket/create' element={<PrivateRoute><TicketCreate /></PrivateRoute>} />
        <Route path='/ticket/view/:id' element={<PrivateRoute><TicketView /></PrivateRoute>} />
        <Route path='/ticket/edit/:id' element={<PrivateRoute><TicketEdit /></PrivateRoute>} />

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  )
}

export default AllRoutes
