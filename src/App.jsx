import {useReducer, useState} from 'react'
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
    const [editableEduObj, setEditableEduObj] = useState(null)
    const [editableExpObj, setEditableExpObj] = useState(null)
    const [resumeObj, dispatchResumeObj] = useReducer(resumeObjReducer, initialResumeObjState)

    function resumeObjReducer(resumeObj, action) {
        switch (action.type) {
            case 'ADD_INTRO_DATA':
                return {
                    ... resumeObj,
                    introduction: action.payload
                };
            case 'ADD_EDU_DATA':
                return {
                    ... resumeObj,
                    education: [
                        ... resumeObj.education,
                        action.payload
                    ]
                };
            case 'ADD_EXP_DATA':
                return {
                    ... resumeObj,
                    experience: [
                        ... resumeObj.experience,
                        action.payload
                    ]
                };
            case 'ADD_SKILL_DATA':
                return {
                    ... resumeObj,
                    skills: action.payload
                };
            case 'DELETE_EDU/EXP':
                if (action.payload.type === "exp") {
                    return {
                        ... resumeObj,
                        experience: resumeObj.experience.filter(exp => exp.id !== action.payload.id)
                    }
                } else if (action.payload.type === "edu") {
                    return {
                        ... resumeObj,
                        education: resumeObj.education.filter(edu => edu.id !== action.payload.id)
                    }

                }
            case 'UPDATE_EDU/EXP':
                if (action.payload.type === "edu") {
                    const indexOfEditedObj = resumeObj.education.findIndex(obj => obj.id === action.payload.editedObj.id)
                    const newEduArr = [... resumeObj.education]
                    newEduArr.splice(indexOfEditedObj, 1, action.payload.editedObj)
                    setEditableEduObj(null)
                    return {
                        ... resumeObj,
                        education: newEduArr
                    }

                } else if (action.payload.type === "exp") {
                    const indexOfEditedObj = resumeObj.experience.findIndex(obj => obj.id === action.payload.editedObj.id)
                    const newExpArr = [... resumeObj.experience]
                    newExpArr.splice(indexOfEditedObj, 1, action.payload.editedObj)
                    setEditableExpObj(null)
                    return {
                        ... resumeObj,
                        experience: newExpArr
                    }

                }

            default:
                return resumeObj
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

    return (
        <>
            <ResumeEditor dispatchResumeObj={dispatchResumeObj}
                editableEduObj={editableEduObj}
                editableExpObj={editableExpObj}></ResumeEditor>
            <Resume resumeObj={resumeObj}
                dispatchResumeObj={dispatchResumeObj}
                setEditableEduExpObj={setEditableEduExpObj}></Resume>
        </>
    )
}

export default App
