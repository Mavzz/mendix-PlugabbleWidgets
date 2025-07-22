import { createElement, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export function ToasterComponent({ message }) {
    useEffect(() => {
        if (message) {
            toast(message);
        }
    }, [message]);

    return <Toaster position="top-right" reverseOrder={false} toastOptions={{ duration: 5000 }} onClick={notify} />;
}
