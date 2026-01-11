import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { supabase } from "../supabase"

function EditTask() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await supabase
        .from("tasks")
        .select("*")
        .eq("id", id)
        .single()

      if (data) {
        setTitle(data.title)
        setDescription(data.description)
      }
    }

    fetchTask()
  }, [id])

  const handleUpdate = async () => {
    await supabase
      .from("tasks")
      .update({ title, description })
      .eq("id", id)

    navigate("/tasks")
  }

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="center-box">
          <h2>Edit Task</h2>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={handleUpdate}>Save</button>
        </div>
      </div>
    </>
  )
}

export default EditTask
