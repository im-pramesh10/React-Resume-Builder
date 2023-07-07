import Education from "./Education";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Skills from "./Skills";
import "./Resume.css"
const Resume = ({resumeObj, deleteEduExp}) => {

    return (
        <>
            <button className="noPrint"
                onClick={
                    () => window.print()
            }>Print</button>
            <Introduction {...resumeObj.introduction}></Introduction>
            {
            // expression start
            resumeObj.experience.length !== 0 && <>
                <div className="title">EXPIERIENCE</div>
                {
                resumeObj.experience.map((experienceObj) => <Experience key={
                        experienceObj.id
                    }
                    {...experienceObj}
                    deleteEduExp={deleteEduExp}
                    id={
                        experienceObj.id
                }></Experience>)
            } </>
        }
            {
            // expression start
            resumeObj.education.length !== 0 && <>
                <div className="title">EDUCATION</div>
                {
                resumeObj.education.map(educationObj => <Education key={
                        educationObj.id
                    }
                    {...educationObj}
                    deleteEduExp={deleteEduExp}
                    id={
                        educationObj.id
                }></Education>)
            } </>
        }

            {
            // expression start
            resumeObj.skills.length !== 0 && <>
                <div className="title">SKILLS</div>
                {
                resumeObj.skills.map((skill, index) => <Skills key={index}
                    skill={skill}></Skills>)
            } </>
        } </>
    );
}

export default Resume;
