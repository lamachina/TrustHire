import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Montserrat, sans-serif",
        body: "Nunito Sans, sans-serif",
        mono: "Roboto, sans-serif",
        futur: 'Unbounded, cursive'
    },
    semanticTokens: {
        colors: {
            bl: {
                default: "#63B3ED",
                _dark: "#63B3ED",
            },
            v: {
                default: "#B794F4",
                _dark: "#B794F4",
            },
            j: {
                default: "#F6E05E",
                _dark: "#F6E05E",
            },
            vd: {
                default: "#68D391",
                _dark: "#68D391",
            },
            b: {
                default: "#000000",
                _dark: "#000000",
            },
            w: {
                default: "#fffff",
                _dark: "#fffff",
            },
            navbar: {
                default: "#c0e0f7",
                _dark: "#27475e"
            }
        },
    }

});

export default theme;
