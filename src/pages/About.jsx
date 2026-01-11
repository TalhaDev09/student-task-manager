import Navbar from "../components/Navbar"

function About() {
  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="center-box">
          <h2>About This Project</h2>
          <p>
            This project is a Student Task Manager built with
            React and Supabase.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
