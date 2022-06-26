import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormConfirmation from "../form/FormConfirmation";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Team from "../team/Team";
import Sponsors from "../sponsors/Sponsors";
import VolunteeringForm from "../form/volunteering/VolunteeringForm";
import ContactForm from "../form/contact/ContactForm";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="echipa" element={<Team/>}/>
                    <Route path="sponsori" element={<Sponsors/>}/>
                    <Route path="voluntariat">
                        <Route index element={<VolunteeringForm/>}/>
                        <Route path="success" element={<FormConfirmation/>}/>
                    </Route>
                    <Route path="/contact">
                        <Route index element={<ContactForm/>}/>
                        <Route path="success" element={<FormConfirmation/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}