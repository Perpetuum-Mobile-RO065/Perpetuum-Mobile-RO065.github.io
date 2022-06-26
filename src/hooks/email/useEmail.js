import {useNavigate} from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function useEmail(serviceID, templateID, publicKey) {
    const navigate = useNavigate();

    return (formData) => {
        emailjs.send(serviceID, templateID, formData, publicKey)
            .then(() => {
                navigate("../success", {replace: true, state: {email: formData.email}})
            }, error => console.log(error.text))
    }
}