import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const FooterWrapper = styled(Box)(({ theme }) => ({
  bottom: 0,
  width: "100%",
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
  textAlign: "center",
  padding: theme.spacing(2, 0),
  boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
}));

const Footer = () => (
  <FooterWrapper component="footer">
    <Container>
      <Typography variant="body1" sx={{ fontSize: { xs: "16px", md: "20px" } }}>
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by Sunny and Ryan Archer
      </Typography>
    </Container>
  </FooterWrapper>
);

export default Footer;
