// import resumeObj from "../Data/ResumeObj";

import { memo, useContext, useEffect, useState} from "react";
import DispatchResumeObjContext from "../Contexts/DispatchResumeObjContext";

function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}


const IntroductionForm = memo(() => {
    const initialIntroData = {
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Position: "",
        Bio: ""
    }
    const [introductionData, setIntroductionData] = useState(initialIntroData)
    const dispatchResumeObj = useContext(DispatchResumeObjContext)

    function handleAddButton(e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log(e);
        dispatchResumeObj({type: 'ADD_INTRO_DATA', payload: introductionData})
    }
    function handleChange(e) { // console.log(e.target.value)
        setIntroductionData({
            ...introductionData,
            [e.target.name]: e.target.value
        })
        // console.log(introductionData)
    }
    return (
        <div className="introduction">
            <form>
                <input onChange={handleChange}
                    name="FirstName"
                    placeholder="First Name"/>
                <input onChange={handleChange}
                    name="LastName"
                    placeholder="Last Name"/>
                <input onChange={handleChange}
                    name="Email"
                    type="email"
                    placeholder="Email"/>
                <input onChange={handleChange}
                    name="Phone"
                    type="number"
                    min="0"
                    placeholder="Phone"/>
                <input onChange={handleChange}
                    name="Position"
                    placeholder="Position"/>
                <input onChange={handleChange}
                    name="Bio"
                    placeholder="Bio/About"/>
                <button onClick={handleAddButton}>Update</button>
            </form>
        </div>
    );
})

const EduExpForm = memo(({Ref, editableEduExpObj, type}) => {
    const initialEduData = {
        Institution: "",
        Location: "",
        Duration: ""
    }
    const [educationData, setEducationData] = useState(initialEduData)
    const dispatchResumeObj = useContext(DispatchResumeObjContext)
    useEffect(() => {
        if (editableEduExpObj) {
            setEducationData(editableEduExpObj)
        }
    }, [editableEduExpObj])

    function handleAddButton(e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log(e);
        let dataArr = [];
        for (const key in educationData) {
            dataArr.push(educationData[key])
        }
        // console.log(dataArr);
        if (dataArr.some(datum => datum === "")) {
            alert("Please Fill all Info.")
        } else {
            const newEduObj = {
                ...educationData,
                id: generateUniqueId()
            }
            if (editableEduExpObj) {
                const newEditableObj = {
                    ...educationData
                }
                // handleUpdate(newEditableObj, type)
                dispatchResumeObj({
                    type: 'UPDATE_EDU/EXP',
                    payload: {
                        editedObj: newEditableObj,
                        type: type
                    }
                })
                setEducationData(initialEduData)
            } else {
                (type === 'edu') ? dispatchResumeObj({type: 'ADD_EDU_DATA', payload: newEduObj}) : dispatchResumeObj({type: 'ADD_EXP_DATA', payload: newEduObj})

                setEducationData(initialEduData)
            }
        }
    }

    function handleChange(e) { // console.log(e.target.value)
        setEducationData({
            ...educationData,
            [e.target.name]: e.target.value
        })
        // console.log(introductionData)
    }
    // console.log(e);


    return (
        <div className="education">
            <form>
                <input ref={Ref} name="Institution"
                    value={
                        educationData.Institution
                    }
                    onChange={handleChange}
                    placeholder="Institution"/>
                <input name="Location"
                    value={
                        educationData.Location
                    }
                    onChange={handleChange}
                    placeholder="Location (Eg. townname,someplace)"/>
                <input name="Duration"
                    value={
                        educationData.Duration
                    }
                    onChange={handleChange}
                    placeholder="Duration (2000-2004)"/>
                <button onClick={handleAddButton}>
                    {
                    editableEduExpObj ? 'Update' : 'Add'
                }</button>
            </form>
        </div>
    );
})

const SkillForm = memo(() => {
    const dispatchResumeObj = useContext(DispatchResumeObjContext)
    function handleAddButton(e) {
        e.preventDefault();
        // console.log(e.target.form[0].value);
        const skillsStr = e.target.form[0].value
        let skillsArr = []
        skillsStr.split(',').forEach(element => {
            const trimmedElement = element.trim()
            if (trimmedElement !== "") {
                skillsArr.push(trimmedElement)
            }
        });

        // console.log(skillsArr);
        dispatchResumeObj({type: 'ADD_SKILL_DATA', payload: skillsArr})
    }

    return (

        <div className="skills">
            <form>
                <input placeholder="js,css (use comma to separate)"/>
                <button onClick={handleAddButton}>Update</button>
            </form>
        </div>
    );
})
export {
    SkillForm,
    EduExpForm,
    IntroductionForm
};
