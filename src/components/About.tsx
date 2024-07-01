import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        backgroundColor: "grey.100",
        padding: "32px 16px",
      }}
    >
      <div className="wrap">
        <Container
          sx={{
            ".MuiTypography-body1": {
              fontSize: { xs: "16px", md: "20px" },
            },
          }}
        >
          <Typography paragraph>Sunny and Ryan are having twins! 🎉</Typography>
          <Typography paragraph>
            Join us in honoring the parents-to-be as they embark on this
            incredible journey. We are excited to celebrate the upcoming arrival
            of their beautiful twins with family and friends. Your presence will
            make this occasion even more special and memorable.
          </Typography>
          <Typography paragraph>
            The baby shower will be filled with joy, laughter, and heartfelt
            moments. There will be fun games, delicious food, and plenty of
            opportunities to create lasting memories. We look forward to sharing
            this joyous time with you and can't wait to see everyone there.
          </Typography>
        </Container>
      </div>
    </Box>
  );
};

export default About;
