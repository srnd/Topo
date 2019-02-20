import { ITheme, IThemeColors, IThemeFonts } from '../ITheme'

export default class CSFairTheme implements ITheme {
    logo = "todo";
    scale = (step: number) : string => (1.5 ** step)+"rem";
    fonts: IThemeFonts = {
        headers: ["Avenir Next", "Helvetica", "sans-serif"],
        copy: ["Avenir Next", "Helvetica", "sans-serif"],
        ui: ["Avenir Next", "Helvetica", "sans-serif"]
    }
    colors: IThemeColors = {
        accent: "",
        foreground: "",
        background: "",
        disabled: "",
        border: "",
        placeholder: "",
        shadow: "".
    }
}