import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"
import EditTask from "./pages/EditTask"
import Profile from "./pages/Profile"
import Statistics from "./pages/Statistics"
import Settings from "./pages/Settings"
import Help from "./pages/Help"
import Notifications from "./pages/Notifications"
import CompletedTasks from "./pages/CompletedTasks"
import About from "./pages/About"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/edit/:id" element={<EditTask />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/completed" element={<CompletedTasks />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
