import React from 'react';

function Contact() {
    return (
        <div>
            <div className="contact">
                <div class="container" id="contact">
                    <h2>Contact Me</h2>
                    <p>
                        Email: placeholder@gmail.com
                      <br />
                            Phone: 07123456789
                     </p>
                    <form>
                        <div class="form-group row">
                            <label class="col-md-3 control-label" for="name">Name</label>
                            <div class="col-md-9">
                                <input id="name" name="name" type="text" placeholder="Your name" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 control-label" for="email">Your E-mail</label>
                            <div class="col-md-9">
                                <input id="email" name="email" type="text" placeholder="Your email" class="form-control" />
                            </div>
                        </div>


                        <div class="form-group row">
                            <label class="col-md-3 control-label" for="message">Your message</label>
                            <div class="col-md-9">
                                <textarea class="form-control" id="message" name="message"
                                    placeholder="Please enter your message here..." rows="5"></textarea>
                            </div>
                        </div>

                        <div class="form-row text-center">
                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-dark" id="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact;