import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80">
                <h1>Hello!</h1>
                <a href="https://github.com/zs274" className="btn btn-light btn-lg active" role="button" aria-pressed="true" style={{ margin: 10 }}>Github</a>
                <a href="https://www.linkedin.com/in/zarin-salim-0107871bb" className="btn btn-light btn-lg active" role="button" aria-pressed="true" style={{ margin: 10 }}>LinkedIn</a>
                <a href="https://drive.google.com/file/d/13-_HL_4i1glhJXXfCgqHtEcVRuJvAgEe/view?usp=sharing" className="btn btn-light btn-lg active" role="button" aria-pressed="true" style={{ margin: 10 }}>CV</a>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <div className="text-center title">
                            <h1>About Me</h1>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            I am currently studying web development at the University of Birmingham, with the hopes
                            of pursuing a career in this field. After graduating from York St John Univeristy in 2014 with a BA
                            Joint Honours in History and American Studies, I worked in retail for a year before moving to South
                            Korea. I worked as an ESL teacher teaching elementary school children at 3 different schools. This was a very
                            rewarding experience and I gained a lot of skills from it, such as communication and planning.
            </p>
                        <p>
                            Living in a different country for a year truly enhanced my personality and skillset and it was a very
                            rewarding experience. However, upon my return to the UK I found myself without any real goals for the
                            future. Since graduating I have thought a lot about going back into education, but I never took the
                            leap.
            </p>
                        <p>
                            That was until I saw an advertisement for the coding bootcamp at the University of Birmingham. I have some
                            experience with HTML and CSS and it has always been a keen interest of mine but I could never find the time
                            or resources to properly learn how to code. I am glad that I decided to take a leap of faith and enrol
                            and I look forward to learning more about coding and web development and starting my career.
            </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
