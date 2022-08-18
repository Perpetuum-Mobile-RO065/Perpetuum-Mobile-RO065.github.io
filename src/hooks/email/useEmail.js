import {useNavigate} from "react-router-dom";
import emailJS from "@emailjs/browser";

export default function useEmail(serviceID, templateID, publicKey) {
    const navigate = useNavigate();

    return (formData) => {
        emailJS.send(serviceID, templateID, formData, publicKey)
            .then(() => {
                navigate("../success", {replace: true, state: {email: formData.email}})
            }, e => navigate("../error", {replace: true, state: {error: e.text}})
            );
    }
}