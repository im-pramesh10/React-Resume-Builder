// import resumeObj from "../Data/ResumeObj";

import {useEffect, useState} from "react";

function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}


const IntroductionForm = ({handleIntroData}) => {
    const initialIntroData = {
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Position: "",
        Bio: ""
    }
    const [introductionData, setIntroductionData] = useState(initialIntroData)

    function handleAddButton(e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log(e);
        handleIntroData(introductionData);
    }
    function handleChange(e) {
        console.log(e.target.value)
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
                <button onClick={handleAddButton}>Add</button>
            </form>
        </div>
    );
}
const EduExpForm = ({handleEduExpData, editableEduExpObj}) => {
    const initialEduData = {
        Institution: "",
        Location: "",
        Duration: ""
    }

    const [educationData, setEducationData] = useState(initialEduData)
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
            handleEduExpData(newEduObj);
            setEducationData(initialEduData)
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
                <input name="Institution"
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
                <button onClick={handleAddButton}>Add</button>
            </form>
        </div>
    );
}

const SkillForm = ({handleSkillData}) => {
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
        handleSkillData(skillsArr)

    }

    return (

        <div className="skills">
            <form>
                <input placeholder="js,css (use comma to separate)"/>
                <button onClick={handleAddButton}>Add</button>
            </form>
        </div>
    );
}
export {
    SkillForm,
    EduExpForm,
    IntroductionForm
};
