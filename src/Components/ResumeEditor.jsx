import {IntroductionForm, EduExpForm, SkillForm} from "./Forms";

const ResumeEditor = ({dispatchResumeObj, editableEduObj, editableExpObj}) => {
    return (
        <div className="noPrint editorContainer">
            <div className="introForm">
                <h3>Introduction</h3>
                <IntroductionForm dispatchResumeObj={dispatchResumeObj}></IntroductionForm>
            </div>
            <div className="expForms">
                <h3>Experience</h3>
                <EduExpForm dispatchResumeObj={dispatchResumeObj}
                    editableEduExpObj={editableExpObj}
                    type="exp"></EduExpForm>
            </div>
            <div className="eduForms">
                <h3>Education</h3>
                <EduExpForm dispatchResumeObj={dispatchResumeObj}
                    editableEduExpObj={editableEduObj}
                    type="edu"></EduExpForm>

            </div>
            <div className="skillForm">
                <h3>Skills</h3>
                <SkillForm dispatchResumeObj={dispatchResumeObj}></SkillForm>
            </div>
        </div>
    );
}

export default ResumeEditor;
