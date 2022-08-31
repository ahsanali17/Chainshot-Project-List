import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import {FormWrapper, FormTitle, Form, Label, Input, TextArea, Button, InputContainer} from "./WorkElement";


const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9fm03gl', 'template_0hljmqp', form.current, 'user_5dhw67tSaVr730CBXlbrW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };

    return (
        <div className="container">
            <FormWrapper>
                <FormTitle>Contact Me</FormTitle>
                <Form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <InputContainer className="firstName">
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                            type="text"
                            name="firstName"
                            className="firstName"
                            tabIndex="1"
                        />
                    </InputContainer>
                    <InputContainer className="lastName">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                            type="text"
                            name="lastName"
                            className="lastName"
                            tabIndex="2"
                        />
                    </InputContainer>
                    <InputContainer className="email">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            className="email"
                            tabIndex="3"
                        />
                    </InputContainer>
                    <InputContainer className="company">
                        <Label htmlFor="company">Company</Label>
                        <Input
                            type="text"
                            name="company"
                            className="company"
                            tabIndex="4"
                        />
                    </InputContainer>
                    <InputContainer className="message">
                        <Label htmlFor="message">Message</Label>
                        <TextArea
                            name="message"
                            className="message"
                            tabIndex="5"
                        />
                    </InputContainer>
                    <Button type="submit" className="send">Submit</Button>
                </Form>
            </FormWrapper>`
        </div>
    )
}

export default ContactMe;
