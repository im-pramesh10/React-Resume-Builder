import {useReducer, useRef, useState} from 'react'
import './App.css'
import Resume from './Components/Resume'
import ResumeEditor from './Components/ResumeEditor'
import DispatchResumeObjContext from './Contexts/DispatchResumeObjContext'
import RefHookContext from './Contexts/useRefHookContext'

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

    const eduExpRef = useRef([]);

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

        <DispatchResumeObjContext.Provider value={dispatchResumeObj}>
            <RefHookContext.Provider value={eduExpRef}>
                <div className='flexContainer'>
                    <div className='noPrint flexItem'>
                        <ResumeEditor editableEduObj={editableEduObj}
                            editableExpObj={editableExpObj}></ResumeEditor>
                    </div>
                    <div className='flexItem'>
                        <Resume resumeObj={resumeObj}
                            setEditableEduExpObj={setEditableEduExpObj}></Resume>
                    </div>
                </div>
            </RefHookContext.Provider>
        </DispatchResumeObjContext.Provider>
    )
}

export default App
