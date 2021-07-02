// import giant_codepath from "../../assets/giant_codepath.svg"
import "./About.css"

export default function About() {
  return (
    <div className="About" id="About">
      <div className="content">
        <h3>About</h3>
        <div className="summary">
          <div className="text">
            <ol>
              <li>Exercise controls weight</li>
              <li>Exercise combats health conditions and diseases</li>  
              <li>Exercise improves mood</li>
              <li>Exercise boosts energy</li>
              <li>Exercise promotes better sleep</li>

            </ol>
            {/* <p>
              Exercise controls weight.
            </p>
            <p>
              Exercise combats health conditions and diseases.
            </p>
            <p>Exercise improves mood.</p> */}
          </div>
          <div className="media">
            {/* <img src={giant_codepath} alt="codepath large" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
