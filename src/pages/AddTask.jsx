import { useState } from "react"
import Navbar from "../components/Navbar"
import { supabase } from "../supabase"

function AddTask() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleAddTask = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      alert("Not logged in")
      return
    }

    const { error } = await supabase.from("tasks").insert([
      {
        title,
        description,
        user_id: user.id,
      },
    ])

    if (error) {
      alert(error.message)
    } else {
      alert("Task added")
      setTitle("")
      setDescription("")
    }
  }

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="center-box">
          <h2>Add Task</h2>

          <input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>
    </>
  )
}

export default AddTask
