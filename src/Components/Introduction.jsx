import "./Introduction.css";

const Introduction = ({
    FirstName,
    LastName,
    Email,
    Phone,
    Position,
    Bio
}) => {

    return (
        <div className="intro-container">
            <div className="full-name">
                <span className="first-name">
                    {FirstName} </span>
                <span className="last-name">
                    {LastName}</span>
            </div>
            <div className="contact-info">
                <span className="email">Email:
                </span>
                <span className="email-val">
                    {Email}</span>
                <span className="separator"></span>
                <span className="phone">Phone:
                </span>
                <span className="phone-val">
                    {Phone}</span>
            </div>
            <div className="bio">
                <span className="position">
                    {Position} </span>
                <span className="bio-desc">
                    {Bio} </span>
            </div>
        </div>
    );
}

export default Introduction;
