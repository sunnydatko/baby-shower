import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";

import backgroundImage from "../assets/plush2.jpg";

const Section = styled("section")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: theme.spacing(8, 0),
  gap: "16px",
  height: "auto",
  minHeight: "60vh",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    padding: theme.spacing(4, 2),
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: theme.spacing(4),
  height: "100%",
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(2),
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "auto",
  padding: theme.spacing(2),
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "50vh",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: 0,
    minHeight: "30vh",
  },
}));

const DetailItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: theme.spacing(2, 0, 2, 2),
  "& svg": {
    marginRight: "8px",
  },
}));

const Details = () => (
  <Section id="details">
    <TextContainer>
      <Typography variant="h2" sx={{ paddingBottom: 2 }}>
        Details
      </Typography>
      <Typography variant="h5" sx={{ paddingBottom: 2 }}>
        Date: September 14, 2024
      </Typography>
      <Divider />
      <DetailItem>
        <LocalBarIcon />
        <Typography sx={{ fontSize: "1.3rem" }}>
          1:00pm arrival and drinks
        </Typography>
      </DetailItem>
      <Divider />
      <DetailItem>
        <SportsEsportsIcon />
        <Typography sx={{ fontSize: "1.3rem" }}>Games and laughter</Typography>
      </DetailItem>
      <Divider />
      <DetailItem>
        <CameraAltIcon />
        <Typography sx={{ fontSize: "1.3rem" }}>Photos and memories</Typography>
      </DetailItem>
      <Divider />
      <DetailItem>
        <RestaurantIcon />
        <Typography sx={{ fontSize: "1.3rem" }}>A bite to eat</Typography>
      </DetailItem>
      <Divider />
      <DetailItem>
        <DepartureBoardIcon />
        <Typography sx={{ fontSize: "1.3rem" }}>5:00 pm departure</Typography>
      </DetailItem>
    </TextContainer>
    <ImageContainer />
  </Section>
);

export default Details;
