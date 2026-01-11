import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { supabase } from "../supabase"
import { Link } from "react-router-dom"

function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    const { data } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user.id)

    setTasks(data || [])
  }

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="center-box">
          <h2>Your Tasks</h2>

          {tasks.length === 0 && <p>No tasks yet</p>}

          {tasks.map((task) => (
            <div key={task.id} style={{ marginBottom: "15px" }}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <Link to={`/edit/${task.id}`}>Edit</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TaskList
