import { Box, Button, Container, Typography } from "@mui/material";

import backgroundImage from "../assets/hero.jpg";

const Hero = () => (
  <Box
    component="section"
    sx={{
      position: "relative",
      height: "70vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <Container
        sx={{
          zIndex: 2,
          textAlign: "center",
          paddingTop: { xs: 10, sm: 12, md: 0 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "common.white",
            textTransform: "uppercase",
            fontSize: { xs: "20px", sm: "24px", md: "30px" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            fontWeight: 300,
          }}
        >
          Join us for a
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "common.white",
            fontSize: { xs: "48px", sm: "60px", md: "144px" },
            marginTop: { xs: 2, md: 0 },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Baby Shower
        </Typography>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            href="#rsvp"
            size="large"
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: { xs: "90%", sm: "250px" },
            }}
          >
            RSVP
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#donate"
            sx={{
              color: "common.white",
              borderColor: "common.white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: { xs: "90%", sm: "250px" },
            }}
          >
            Donate
          </Button>
        </Box>
      </Container>
    </Box>
  </Box>
);

export default Hero;
