import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Events from "./pages/Events"
import CreateEvent from "./pages/CreateEvent"
import Forums from "./pages/CreateForum"
import CreateForum from "./pages/CreateForum"
import EditEvent from "./pages/EditEvent"


// components
import Navbar from "./components/Navbar"
import EventCard from "./components/EventCard"
import ForumCard from "./components/ForumCard";


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
        <Route path="/event" element={<Events />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/events/edit" element={<EditEvent />} />
        <Route path="/forum" element={<Forums />} />
        <Route path="/forums/create" element={<CreateForum />} />
    

        {/* error FE routes here... */}

      </Routes>
    </div>
  )
}

export default App
