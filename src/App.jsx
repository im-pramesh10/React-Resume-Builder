import {useState} from 'react'
import './App.css'
import Resume from './Components/Resume'
import ResumeEditor from './Components/ResumeEditor'

function App() {
    const initialResumeObjState = {
        introduction: {
            FirstName: null,
            LastName: null,
            Email: null,
            Phone: null,
            Position: null,
            Bio: null
        },
        education: [],
        experience: [],
        skills: []
    }
    const [resumeObj, setResumeObj] = useState(initialResumeObjState)
    
    function handleIntroData(exp){
        setResumeObj({...resumeObj,introduction:exp});
    }

    function handleEduData(edu){
        setResumeObj({...resumeObj,education:[...resumeObj.education,edu]});
    }
    function handleExpData(exp){
        setResumeObj({...resumeObj,experience:[...resumeObj.experience,exp]});
    }
    function handleSkillData(skill){
        setResumeObj({...resumeObj,skills:skill});
    }

    // let experienceObj = {
    //     Institution: "Abc university",
    //     Location: "place, japan",
    //     Duration: "2015-2017",
    //     setState: () => {
    //         setResumeObj((resumeObjContent) => {
    //             return {
    //                 ...resumeObjContent,
    //                 experience: [
    //                     ...resumeObjContent.experience, {
    //                         Institution: this.Institution,
    //                         Location: this.Location,
    //                         Duration: this.Duration
    //                     }
    //                 ]
    //             }
    //         })
    //     }
    // }
    return (
        <>
            <ResumeEditor handleIntroData={handleIntroData} handleEduData={handleEduData} handleExpData={handleExpData} handleSkillData={handleSkillData}></ResumeEditor>
            <Resume resumeObj={resumeObj}></Resume>
        </>
    )
}

export default App
