// import resumeObj from "../Data/ResumeObj";

const IntroductionForm = ({setResumeObj}) => {

    function handleAddButton(e) {
        e.preventDefault();
        // console.log(e);
        const data = [
            e.target.form[0].value,
            e.target.form[1].value,
            e.target.form[2].value,
            e.target.form[3].value,
            e.target.form[4].value,
            e.target.form[5].value
        ]
        if (data.some(datum => datum === "")) {
            alert("Please Fill all Info.")
        } else {
            const exp = {
                FirstName: data[0],
                LastName: data[1],
                Email: data[2],
                Phone: data[3],
                Position: data[4],
                Bio: data[5]
            }
            console.log(exp);
            setResumeObj(exp);

        }
    }
    return (
        <div className="introduction">
            <form>
                <input placeholder="First Name"/>
                <input placeholder="Last Name"/>
                <input type="email" placeholder="Email"/>
                <input type="number" min="0" placeholder="Phone"/>
                <input placeholder="Position"/>
                <input placeholder="Bio/About"/>
                <button type="submit"
                    onClick={
                        (e) => handleAddButton(e)
                }>Add</button>
            </form>
        </div>
    );
}
const EducationForm = () => {
    return (
        <div className="education">
            <form>
                <input placeholder="Institution"/>
                <input placeholder="Location (Eg. townname,someplace)"/>
                <input placeholder="Duration (2000-2004)"/>
                <button onClick={
                    (e) => e.preventDefault()
                }>Add</button>
            </form>
        </div>
    );
}

const ExperienceForm = () => {
    return (
        <div className="experience">
            <form>
                <input placeholder="Institution"/>
                <input placeholder="Location (Eg. townname,someplace)"/>
                <input placeholder="Duration (2000-2004)"/>
                <button onClick={
                    (e) => e.preventDefault()
                }>Add</button>
            </form>
        </div>
    );
}

const SkillForm = () => {
    return (
        <div className="skills">
            <form>
                <input placeholder="js, css (use comma to separate)"/>
                <button onClick={
                    (e) => e.preventDefault()
                }>Add</button>
            </form>
        </div>
    );
}

export {
    SkillForm,
    ExperienceForm,
    EducationForm,
    IntroductionForm
};
