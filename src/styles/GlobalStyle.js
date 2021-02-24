import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"
export const GlobalStyle = createGlobalStyle`
:root {
    --theme-bg-color: rgba(16 18 27 / 40%);
    --border-color: rgba(113 119 144 / 25%);
    --theme-color: #f9fafb;
    --inactive-color: rgb(113 119 144 / 78%);
    --body-font: "Poppins", sans-serif;
    --hover-menu-bg: rgba(12 15 25 / 30%);
    --content-title-color: #999ba5;
}
body {

    /* background: ${themes.light.backgroundColor}; */
    font-family: var(--body-font);
    font-weight: 400;
    background-image: url(https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg);
    /* background-image: url(https://4kwallpapers.com/images/wallpapers/sunrise-morning-bachalpsee-lake-reflections-switzerland-2560x1440-31.jpg); */
    background-size: cover;
    background-position: center;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;
/*     
    @media (prefers-color-scheme: dark) {
        background: ${themes.dark.backgroundColor};
        color: ${themes.dark.text1};
    } */
}

`
