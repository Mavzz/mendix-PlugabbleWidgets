import { StyleSheet, View } from "react-native";
import { Gradient } from "./components/Gradient";
import { createElement } from "react";

export function LinearGradient({ colors, gradientConfig, content, style }) {
    console.log("content:", content);
    return <Gradient gradientConfig={gradientConfig} children={content} />
}
