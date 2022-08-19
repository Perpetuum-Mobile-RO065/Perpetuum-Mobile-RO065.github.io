import {useLocation} from "react-router-dom";

export default function useButtonText() {
    const location = useLocation();
    return (location.pathname.split('/')[1] === "voluntariat" ? "Alatură-te echipei!" : "Contact");
}