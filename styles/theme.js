import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#F9DBBD",
    primary: "#0D0628",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Darker Grotesque, sans-serif",
        color: "white",
        backgroundColor: "primary",
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary",
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
