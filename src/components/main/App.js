import React from "react"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import FormConfirmation from "../form/redirect/success/FormConfirmation";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Team from "../team/Team";
import Sponsors from "../sponsors/Sponsors";
import VolunteeringForm from "../form/volunteering/VolunteeringForm";
import ContactForm from "../form/contact/ContactForm";
import FormFailure from "../form/redirect/error/FormFailure";
import UnknownPage from "../home/UnknownPage";
import Contact from "../form/contact/Contact";
import Volunteer from "../form/volunteering/Volunteer";
import Season from "../sponsors/Season";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="echipa" element={<Team/>}/>
                    <Route path="sponsori" element={<Sponsors/>}>
                        <Route path={":season"} element={<Season/>}/>
                    </Route>
                    <Route path="voluntariat" element={<Volunteer/>}>
                        <Route index element={<VolunteeringForm/>}/>
                        <Route path="success" element={<FormConfirmation/>}/>
                        <Route path="error" element={<FormFailure/>}/>
                    </Route>
                    <Route path="contact" element={<Contact/>}>
                        <Route index element={<ContactForm/>}/>
                        <Route path="success" element={<FormConfirmation/>}/>
                        <Route path="error" element={<FormFailure/>}/>
                    </Route>
                    <Route path="404" element={<UnknownPage/>}/>
                    <Route path="*" element={<Navigate to={"404"}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}