import { StyleSheet, View } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import { createElement } from "react";

//import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0
    },
    content: {
        flex: 1
    }
});

export function Gradient({ gradientConfig, children }) {
    //const styles = mergeNativeStyles(defaultStyle, style);

    console.log("Gradient Config:", gradientConfig.value);
    const parsedValue = JSON.parse(gradientConfig.value);

    const colors = parsedValue.colors || ["#8dfffdff", "#FFFFFF"];
    const start = parsedValue.start || { x: 0, y: 0 };
    const end = parsedValue.end || { x: 1, y: 1 };

    console.log("Colors:", parsedValue.colors);
    console.log("Start:", parsedValue.start);
    console.log("End:", parsedValue.end);
    return (
        <View style={defaultStyle.container}>
            <LinearGradient colors={colors} style={defaultStyle.gradient} start={start} end={end} />
            <View style={defaultStyle.content}>{children}</View>
        </View>
    );
}
