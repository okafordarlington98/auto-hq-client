import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Events from "./pages/Events"
import CreateEvent from "./pages/CreateEvent"
import EditEvent from "./pages/EditEvent"
import EventDetails from "./pages/EventDetails"
import Forums from "./pages/Forums"
import CreateForum from "./pages/CreateForum"
import ForumDetails from "./pages/ForumDetails"
import User from "./pages/User"
import EditUser from "./pages/EditUser";

// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Navbar />

      <br />
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private-page-example" element={<OnlyPrivate> <PrivatePageExample /> </OnlyPrivate>} />

        {/* error FE routes here... */}

      </Routes>
    </div>
  )
}

export default App
