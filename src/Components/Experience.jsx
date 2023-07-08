import {useContext} from "react";
import DispatchResumeObjContext from "../Contexts/DispatchResumeObjContext";

const Experience = ({
    Institution,
    Location,
    Duration,
    id,
    setEditableEduExpObj
}) => {
    const dispatchResumeObj = useContext(DispatchResumeObjContext)
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
                            type: "exp"
                        }
                    })
            }>Delete</button>
            <button className="noPrint"
                onClick={
                    () => setEditableEduExpObj(id, "exp")
            }>Update</button>

            <br/><br/>
        </>
    );
}

export default Experience;
