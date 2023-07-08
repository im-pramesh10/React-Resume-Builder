import {IntroductionForm, EduExpForm, SkillForm} from "./Forms";

const ResumeEditor = ({editableEduObj, editableExpObj}) => {
    return (
        <div className="noPrint editorContainer">
            <div className="introForm">
                <h3>Introduction</h3>
                <IntroductionForm></IntroductionForm>
            </div>
            <div className="expForms">
                <h3>Experience</h3>
                <EduExpForm editableEduExpObj={editableExpObj}
                    type="exp"></EduExpForm>
            </div>
            <div className="eduForms">
                <h3>Education</h3>
                <EduExpForm editableEduExpObj={editableEduObj}
                    type="edu"></EduExpForm>

            </div>
            <div className="skillForm">
                <h3>Skills</h3>
                <SkillForm></SkillForm>
            </div>
        </div>
    );
}

export default ResumeEditor;
