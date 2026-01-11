import Navbar from "../components/Navbar"

function CompletedTasks() {
  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="center-box">
          <h2>Completed Tasks</h2>
          <p>Tasks you have already completed.</p>
        </div>
      </div>
    </>
  )
}

export default CompletedTasks
