import { createElement } from "react";
import { HelloWorldSample } from "./components/ToasterComponent";

export function preview({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss() {
    return require("./ui/Toastify.css");
}
