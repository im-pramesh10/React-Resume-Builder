import { useContext } from "react";
import DispatchResumeObjContext from "../Contexts/DispatchResumeObjContext";

const Education = ({
    Institution,
    Location,
    Duration,
    id,
    setEditableEduExpObj
}) => {
    const dispatchResumeObj=useContext(DispatchResumeObjContext);
    return (
        <>
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
                    () => setEditableEduExpObj(id, "edu")
            }>Update</button>

            <br/><br/>
        </>
    );
}

export default Education;
