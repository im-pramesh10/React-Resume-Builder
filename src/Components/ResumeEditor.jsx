import {useContext} from "react";
import {IntroductionForm, EduExpForm, SkillForm} from "./Forms";
import RefHookContext from "../Contexts/useRefHookContext";

const ResumeEditor = ({editableEduObj, editableExpObj}) => {
    const childRef = useContext(RefHookContext)
    return (
        <div className="noPrint editorContainer">
            <div className="introForm">
                <h3>Introduction</h3>
                <IntroductionForm></IntroductionForm>
            </div>
            <div className="expForms">
                <h3>Experience</h3>
                <EduExpForm Ref={
                        ((el) => childRef.current[0] = el)
                    }
                    editableEduExpObj={editableExpObj}
                    type="exp"></EduExpForm>
            </div>
            <div className="eduForms">
                <h3>Education</h3>
                <EduExpForm Ref={
                        (el) => (childRef.current[1] = el)
                    }
                    editableEduExpObj={editableEduObj}
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
