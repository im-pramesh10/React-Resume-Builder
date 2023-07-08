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
    const [editableEduObj, setEditableEduObj] = useState(null)
    const [editableExpObj, setEditableExpObj] = useState(null)


    function handleIntroData(exp) {
        setResumeObj({
            ...resumeObj,
            introduction: exp
        });
    }

    function handleEduData(edu) {
        setResumeObj({
            ...resumeObj,
            education: [
                ...resumeObj.education,
                edu
            ]
        });
    }
    function handleExpData(exp) {
        setResumeObj({
            ...resumeObj,
            experience: [
                ...resumeObj.experience,
                exp
            ]
        });
    }
    function handleSkillData(skill) {
        setResumeObj({
            ...resumeObj,
            skills: skill
        });
    }
    function deleteEduExp(id, type) {
        if (type === "exp") {
            setResumeObj({
                ...resumeObj,
                experience: resumeObj.experience.filter(exp => exp.id !== id)
            })
        } else if (type === "edu") {
            setResumeObj({
                ...resumeObj,
                education: resumeObj.education.filter(edu => edu.id !== id)
            })
        }
    }
    function setEditableEduExpObj(id, type) {
        if (type === "edu") {
            setEditableEduObj(resumeObj.education.find(edu => edu.id === id))
        } else if (type === "exp") {
            setEditableExpObj(resumeObj.experience.find(exp => exp.id === id))
        }
        // console.log(editableEduExpObj)
    }
    function handleUpdate(editedObj, type) {
        if (type === "edu") {
            const indexOfEditedObj = resumeObj.education.findIndex(obj => obj.id === editedObj.id)
            const newEduArr = [...resumeObj.education]
            newEduArr.splice(indexOfEditedObj, 1, editedObj)
            setResumeObj({
                ...resumeObj,
                education: newEduArr
            })
            setEditableEduObj(null)
        } else if (type === "exp") {
            const indexOfEditedObj = resumeObj.experience.findIndex(obj => obj.id === editedObj.id)
            const newExpArr = [...resumeObj.experience]
            newExpArr.splice(indexOfEditedObj, 1, editedObj)
            setResumeObj({
                ...resumeObj,
                experience: newExpArr
            })
            setEditableExpObj(null)
        }
    }

    return (
        <>
            <ResumeEditor handleIntroData={handleIntroData}
                handleEduData={handleEduData}
                handleExpData={handleExpData}
                handleSkillData={handleSkillData}
                editableEduObj={editableEduObj}
                editableExpObj={editableExpObj}
                handleUpdate={handleUpdate}></ResumeEditor>
            <Resume resumeObj={resumeObj}
                deleteEduExp={deleteEduExp}
                setEditableEduExpObj={setEditableEduExpObj}></Resume>
        </>
    )
}

export default App
