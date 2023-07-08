import {IntroductionForm, EduExpForm, SkillForm} from "./Forms";

const ResumeEditor = ({
    handleIntroData,
    handleEduData,
    handleExpData,
    handleSkillData,
    editableEduObj,
    editableExpObj
}) => {
    return (
        <div className="noPrint editorContainer">
            <div className="introForm">
                <h3>Introduction</h3>
                <IntroductionForm handleIntroData={handleIntroData}></IntroductionForm>
            </div>
            <div className="expForms">
                <h3>Experience</h3>
                <EduExpForm handleEduExpData={handleExpData}
                    editableEduExpObj={editableExpObj}></EduExpForm>
            </div>
            <div className="eduForms">
                <h3>Education</h3>
                <EduExpForm handleEduExpData={handleEduData}
                    editableEduExpObj={editableEduObj}></EduExpForm>

            </div>
            <div className="skillForm">
                <h3>Skills</h3>
                <SkillForm handleSkillData={handleSkillData}></SkillForm>
            </div>
        </div>
    );
}

export default ResumeEditor;
