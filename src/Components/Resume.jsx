import Education from "./Education";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Skills from "./Skills";
import "./Resume.css"
const Resume = ({resumeObj}) => {

    return (
        <>
            <button className="noPrint" onClick={()=>window.print()}>Print</button>
            <Introduction {...resumeObj.introduction}></Introduction>
            {
            // expression start
            resumeObj.experience.length !== 0 && <>
                <div className="title">EXPIERIENCE</div>
                {
                resumeObj.experience.map(experienceObj => <Experience {...experienceObj}></Experience>)
            } </>
        }
            {
            // expression start
            resumeObj.education.length !== 0 && <>
                <div className="title">EDUCATION</div>
                {
                resumeObj.education.map(educationObj => <Education {...educationObj}></Education>)
            } </>
        }

            {
            // expression start
            resumeObj.skills.length !== 0 && <>
                <div className="title">SKILLS</div>
                {
                resumeObj.skills.map(skill => <Skills skill={skill}></Skills>)
            } </>
        }
           
        </>
    );
}

export default Resume;
