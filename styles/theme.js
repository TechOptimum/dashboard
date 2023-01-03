import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#d6840c",
    primary: "#00153a",
  },
  fonts: {
    body: "'Neue Machina', sans-serif",
    heading: "'Neue Machina', sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Neue Machina",
        color: "white",
        backgroundColor: "bgColor",
        padding: 0,
        margin: 0,
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "secondary",
        borderRadius: "50px",
      },
    }),
  },
});


export default theme;
