import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./components/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import EventDetails from "./pages/EventDetails";
import EditEvent from "./pages/EditEvent";
import Forums from "./pages/Forums";
import CreateForum from "./pages/CreateForum";
import ForumDetails from "./pages/ForumDetails";




// components
import Navbar from "./components/Navbar"



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
        <Route path="/events" element={<Events />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/events/edit/:eventId" element={<EditEvent />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/forums/create" element={<CreateForum />} />
        <Route path="/forums/:forumId" element={<ForumDetails />} />
        



        {/* error FE routes here... */}

      </Routes>

    </div>
  );
}

export default App
