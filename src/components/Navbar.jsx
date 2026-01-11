import { Link } from "react-router-dom"
import { supabase } from "../supabase"

function Navbar() {
  const logout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/login"
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        Student Task Manager
      </div>

      <div className="navbar-right">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Task</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/completed">Completed</Link>
        <Link to="/stats">Statistics</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/help">Help</Link>
        <Link to="/about">About</Link>

        <button
          onClick={logout}
          style={{
            marginLeft: "20px",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
