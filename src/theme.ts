import { createTheme } from "@mui/material/styles";

const color2 = "#1b1b1b";
const color5 = "#e9651d";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3c4f6c",
      light: "#cde7e3",
      dark: "#0e1b2e",
    },
    secondary: {
      main: color5,
    },
    grey: {
      100: "rgb(248, 248, 248)",
      900: color2,
    },
  },

  typography: {
    h1: {
      fontSize: "96px",
      fontFamily: "'Oooh Baby', cursive",
      fontWeight: 800,
      lineHeight: "103%",
      marginBottom: "8px",
    },
    h2: {
      fontFamily: "'Oooh Baby', cursive",
      fontWeight: 500,
      fontSize: "60px",
    },
    h3: {
      fontFamily: "'Oooh Baby', cursive",
      textAlign: "center",
      fontSize: "48px",
    },
    h4: {
      fontFamily: "'Oooh Baby', cursive",
      fontSize: "36px",
    },
    h5: {
      fontFamily: '"Anybody", sans-serif',
      textAlign: "center",
      fontSize: "30px",
    },
    h6: {
      fontFamily: "'Oooh Baby', cursive",
      textAlign: "center",
      fontSize: "24px",
    },
    body1: {
      fontFamily: '"Anybody", sans-serif',
      fontSize: "20px",
      lineHeight: "33px",
    },
    body2: {
      fontFamily: '"Anybody", sans-serif',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          fontFamily: "'Montserrat', sans-serif",
        },
        root: {
          padding: "12px 24px",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: "#ffffff",
          fontSize: "40px",
          "&:hover": {
            color: "#48d1ff",
          },
        },
      },
    },
  },
});

export default theme;
