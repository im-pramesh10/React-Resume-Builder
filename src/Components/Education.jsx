const Education = ({
    Institution,
    Location,
    Duration,
    deleteEduExp,
    id
}) => {
    return (
        <>
            <div className="institution">
                {Institution}</div>
            <div className="location">
                {Location}</div>
            <div className="duration">
                {Duration}</div>
            <button className="noPrint" onClick={
                () => deleteEduExp(id, "edu")
            }>Delete</button>

            <br/><br/>
        </>
    );
}

export default Education;
