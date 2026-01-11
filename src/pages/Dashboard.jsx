import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { supabase } from "../supabase"

function Dashboard() {
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

  const completed = tasks.filter((t) => t.completed).length
  const pending = tasks.length - completed

  return (
    <>
      <Navbar />

      <div className="page-wrapper">
        <div className="center-box" style={{ maxWidth: "800px" }}>
          <h2>Dashboard</h2>

          {/* SUMMARY CARDS */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <div className="card">
              <h4>Total Tasks</h4>
              <p>{tasks.length}</p>
            </div>

            <div className="card">
              <h4>Completed</h4>
              <p>{completed}</p>
            </div>

            <div className="card">
              <h4>Pending</h4>
              <p>{pending}</p>
            </div>
          </div>

          {/* TABLE */}
          <h3>Recent Tasks</h3>
          <table width="100%">
            <thead>
              <tr>
                <th align="left">Title</th>
                <th align="left">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.slice(0, 5).map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.completed ? "Done" : "Pending"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard
