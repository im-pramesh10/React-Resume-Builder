import {useContext} from "react";
import DispatchResumeObjContext from "../Contexts/DispatchResumeObjContext";
import RefHookContext from "../Contexts/useRefHookContext";

const Education = ({
    Institution,
    Location,
    Duration,
    id,
    setEditableEduExpObj
}) => {
    const formFocusRef = useContext(RefHookContext)
    const dispatchResumeObj = useContext(DispatchResumeObjContext);
    return (
        <div>
            <div className="institution">
                {Institution}</div>
            <div className="location">
                {Location}</div>
            <div className="duration">
                {Duration}</div>
            <button className="noPrint"
                onClick={
                    () => dispatchResumeObj({
                        type: 'DELETE_EDU/EXP',
                        payload: {
                            id: id,
                            type: "edu"
                        }
                    })
            }>Delete</button>
            <button className="noPrint"
                onClick={
                    () => {
                        setEditableEduExpObj(id, "edu")
                        formFocusRef.current[1].focus()
                    }
            }>Update</button>

            <br/><br/>
        </div>
    );
}

export default Education;
