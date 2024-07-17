import { Box, Link, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

import backgroundImage from "../assets/b2.jpg";
import sunnyAndRyan from "../assets/sunny-ryan.jpg";

const Section = styled("section")(({ theme }) => ({
  position: "relative",
  height: "70vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  justifyContent: "center",
  padding: "0 16px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    height: "auto",
    padding: "16px",
  },
}));

const PhotoContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "55vh",
  backgroundImage: `url(${sunnyAndRyan})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.down("lg")]: {
    width: "80%",
    height: "65vh",
    marginTop: theme.spacing(2),
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(2),
  marginLeft: "-16px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    marginLeft: 0,
    padding: "16px 0",
  },
}));

const LocationSection = () => {
  const theme = useTheme();

  return (
    <Section id="location">
      <PhotoContainer />
      <TextContainer>
        <Typography variant="h2" gutterBottom>
          Location
        </Typography>
        <Typography variant="h5">
          <Link target="_blank" href="https://www.goodliferesorts.com/">
            Good Life Resorts
          </Link>
        </Typography>
        <Typography variant="body1">
          3233 Market St, San Diego, CA 92102
        </Typography>
        <Typography variant="body1">
          Room:{" "}
          <Link
            target="_blank"
            href="https://goodliferesorts.guestybookings.com/properties/642c8459f043c8002cec1ecf?city=San+Diego"
          >
            The Bamboo Garden
          </Link>
        </Typography>
        <Typography variant="body1">
          Plenty of free street parking available!
        </Typography>
        <Typography variant="body1" sx={{ paddingBottom: theme.spacing(24) }}>
          Hosted Zoom session for remote attendees
        </Typography>
      </TextContainer>
    </Section>
  );
};

export default LocationSection;
