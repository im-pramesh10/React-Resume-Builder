import {IntroductionForm, EduExpForm, SkillForm} from "./Forms";

const ResumeEditor = ({handleIntroData, handleEduData, handleExpData, handleSkillData}) => {
    return (
        <div className="noPrint editorContainer">
            <div className="introForm">
                <h3>Introduction</h3>
                <IntroductionForm handleIntroData={handleIntroData}></IntroductionForm>
            </div>
            <div className="expForms">
                <h3>Experience</h3>
                <EduExpForm handleEduExpData={handleExpData}></EduExpForm>
            </div>
            <div className="eduForms">
                <h3>Education</h3>
                <EduExpForm handleEduExpData={handleEduData}></EduExpForm>
                
            </div>
            <div className="skillForm">
                <h3>Skills</h3>
                <SkillForm handleSkillData={handleSkillData}></SkillForm>
            </div>
        </div>
    );
}

export default ResumeEditor;
