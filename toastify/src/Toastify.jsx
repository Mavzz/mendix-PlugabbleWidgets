import "./ui/Toastify.css";
import { ToasterComponent } from "./components/ToasterComponent";
import { createElement } from "react";

export function Toastify({ toasterMessage }) {
    return <ToasterComponent message={toasterMessage} />;
}
