import Education from "./Education";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Skills from "./Skills";
import "./Resume.css"
const Resume = ({resumeObj, setEditableEduExpObj}) => {

    return (
        <>
            <Introduction {...resumeObj.introduction}></Introduction>
            {
            // expression start
            resumeObj.experience.length !== 0 && <>
                <div className="title">EXPIERIENCE</div>
                <div className="gridContainer">
                {
                resumeObj.experience.map((experienceObj) => <Experience key={
                        experienceObj.id
                    }
                    {...experienceObj}
                    id={
                        experienceObj.id
                    }
                    setEditableEduExpObj={setEditableEduExpObj}></Experience>)
            }   </div>
            </>
        }
            {
            // expression start
            resumeObj.education.length !== 0 && <>
                <div className="title">EDUCATION</div>
                <div className="gridContainer">

                
                {
                resumeObj.education.map(educationObj =><Education key={
                        educationObj.id
                    }
                    {...educationObj}
                    id={
                        educationObj.id
                    }
                    setEditableEduExpObj={setEditableEduExpObj}></Education>)
            }</div> </>
        }

            {
            // expression start
            resumeObj.skills.length !== 0 && <>
                <div className="title">SKILLS</div>
                {
                resumeObj.skills.map((skill, index) => <Skills key={index}
                    skill={skill}></Skills>)
            } </>
        } 
        </>
    );
}

export default Resume;
