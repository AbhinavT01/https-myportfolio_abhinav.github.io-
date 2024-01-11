import React from "react";
import Card from "react-bootstrap/Card";
import { BsCameraFill} from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhinav Thakur </span>
            from <span className="purple"> Deoghar, India.</span>
            <br />I am  pursuing B.TECH in Electronics and communication engineering from <span className="purple"> Birla Institute Of Technology,Ranchi</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity ">
              <BsCameraFill /> Watching Webseries
            </li>
            
            
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ravindra</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
