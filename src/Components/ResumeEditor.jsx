import {useState} from "react";
import {EducationForm, ExperienceForm, IntroductionForm, SkillForm} from "./Forms";

const ResumeEditor = ({setResumeObj}) => {
    const initialExperienceFormsArr = [];
    const initialEducationFormsArr = [];
    const [addExperienceForms, setAddExperienceForms] = useState(initialExperienceFormsArr);
    const [addEducationForms, setAddEducationForms] = useState(initialEducationFormsArr);
    function handleAddExperiencePlusButton(e) {
        e.preventDefault();
        setAddExperienceForms([
            ...addExperienceForms,
            <ExperienceForm></ExperienceForm>
        ])
    }
    function handleAddEducationPlusButton(e) {
        e.preventDefault();
        setAddEducationForms([
            ...addEducationForms,
            <EducationForm></EducationForm>
        ])
    }
    return (
        <div className="noPrint editorContainer">
            <div className="introForm">
                <h3>Introduction</h3>
                <IntroductionForm setResumeObj={setResumeObj}></IntroductionForm>
            </div>
            <div className="expForms">
                <h3>Experience</h3>
                <ExperienceForm></ExperienceForm>
                {
                addExperienceForms.map((form, index) => (
                    <div key={index}>
                        {form}</div>
                ))
            }

                <button onClick={
                    (e) => handleAddExperiencePlusButton(e)
                }>+</button>
            </div>
            <div className="eduForms">
                <h3>Education</h3>
                <EducationForm></EducationForm>
                {
                addEducationForms.map((form, index) => (
                    <div key={index}>
                        {form}</div>
                ))
            }

                <button onClick={
                    (e) => handleAddEducationPlusButton(e)
                }>+</button>
            </div>
            <div className="skillForm">
                <h3>Skills</h3>
                <SkillForm></SkillForm>
            </div>
        </div>
    );
}

export default ResumeEditor;
