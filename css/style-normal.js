import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontSize": "13pt",
        "letterSpacing": 0.025,
        "lineHeight": 1.65
    },
    "input": {
        "fontSize": "13pt",
        "letterSpacing": 0.025,
        "lineHeight": 1.65
    },
    "select": {
        "fontSize": "13pt",
        "letterSpacing": 0.025,
        "lineHeight": 1.65
    },
    "textarea": {
        "fontSize": "13pt",
        "letterSpacing": 0.025,
        "lineHeight": 1.65
    },
    "h1": {
        "lineHeight": 1.5
    },
    "h2": {
        "lineHeight": 1.5
    },
    "h3": {
        "lineHeight": 1.5
    },
    "h4": {
        "lineHeight": 1.5
    },
    "h5": {
        "lineHeight": 1.5
    },
    "h6": {
        "lineHeight": 1.5
    },
    "headermajor": {
        "paddingBottom": 1.5
    },
    "footermajor": {
        "paddingTop": 2
    },
    "wrapper": {
        "marginBottom": 4,
        "paddingTop": 4,
        "paddingRight": 3,
        "paddingBottom": 4,
        "paddingLeft": 3
    },
    "wrapperstyle4": {
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "header nav ul li": {
        "marginLeft": 1
    },
    "banner": {
        "backgroundAttachment": "scroll"
    },
    "cta": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "backgroundAttachment": "scroll"
    },
    "footer": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4
    }
});