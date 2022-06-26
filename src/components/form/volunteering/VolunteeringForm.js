import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function VolunteeringForm() {
    const [formData, setFormData] = useState({user_name: "", user_email: "", message: ""})
    const navigate = useNavigate();

    const formChange = (event) => {
        const {value, name} = event.target;
        setFormData(prevState => {
            return {...prevState, [name]: value};
        })
    }

    const sendFakeEmail = (event) => {
        event.preventDefault();
        setTimeout(() => navigate("../success", {replace: true, state: {email: formData.user_email, type: "volunteering"}}), 1000);
    }

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.send("service_nm6x8na", "template_owcu8ll", formData, "CS8FmbKAqyI6-414J")
            .then(value => {
                navigate("../success", {replace: true, state: formData})
            }, error => console.log(error.text))
    }

    return (
        <form onSubmit={sendFakeEmail}>
            <label>Name</label>
            <input type="text" name="user_name" onChange={formChange} value={formData.user_name}/>
            <label>Email</label>
            <input type="email" name="user_email" onChange={formChange} value={formData.user_email}/>
            <label>Message</label>
            <textarea name="message" onChange={formChange} value={formData.message}/>
            <input type="submit" value="Send"/>
        </form>
    )
}