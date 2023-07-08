const Experience = ({
    Institution,
    Location,
    Duration,
    deleteEduExp,
    id,
    setEditableEduExpObj
}) => {
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
                    () => deleteEduExp(id, "exp")
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
