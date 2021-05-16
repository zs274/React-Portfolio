import React from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <div className="text-center title">
                            <h1>Contact Me</h1>
                            <p> Email: placeholder@gmail.com</p>
                            <p> Phone: 0123456789 </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <form>
                        <div className="form-group row">
                            <label className="col-md-3 control-label" for="name">Name</label>
                            <div className="col-md-9">
                                <input id="name" name="name" type="text" placeholder="Your name" class="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 control-label" for="email">Your E-mail</label>
                            <div className="col-md-9">
                                <input id="email" name="email" type="text" placeholder="Your email" class="form-control" />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-md-3 control-label" for="message">Your message</label>
                            <div className="col-md-9">
                                <textarea class="form-control" id="message" name="message"
                                    placeholder="Please enter your message here..." rows="5"></textarea>
                            </div>
                        </div>

                        <div className="form-row text-center">
                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-dark" id="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </Row>

            </Container>
        </div>
    )
}

export default Contact;