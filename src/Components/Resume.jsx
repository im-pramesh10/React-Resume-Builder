import Education from "./Education";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Skills from "./Skills";

const Resume = () => {
    let resumeObj = {
        introduction: {
            FirstName: "John",
            LastName: "Doe",
            Email: "xyz@abc.com",
            Phone: "973668638764866",
            Position: "Front-End Developer",
            Bio: " I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. "
        },
        education: [
            {
                Institution: "Abc university",
                Location: "place, japan",
                Duration: "2015-2017"
            }, {
                Institution: "xyz college",
                Location: "place, america",
                Duration: "2017-2018"
            }, {
                Institution: "some uni",
                Location: "place3, japan",
                Duration: "2018-2019"
            }
        ],
        experience: [
            {
                Institution: "xyz company",
                Location: "xyz, nasjj",
                Duration: "2012-2015"
            }, {
                Institution: "fyx company",
                Location: "xyz, nassjshss",
                Duration: "2015-2018"
            }, {
                Institution: "abc",
                Location: "location",
                Duration: "2018-2022"
            }
        ],
        skills: ["JavaScript", "Html", "CSS", "NodeJS"]

    }
    return (
        <>
            <Introduction {...resumeObj.introduction}></Introduction>
            <Experience></Experience>
            <Education></Education>
            <Skills></Skills>
        </>
    );
}

export default Resume;
