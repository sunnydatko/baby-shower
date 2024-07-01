import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const items = [
  {
    title: "Crib Mobile",
    image:
      "https://m.media-amazon.com/images/I/31YcBowyrLL._SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/baby-reg/sunny-archer-march-2025-oceanside/3IGZYFHK9LVXS",
  },
  {
    title: "Swaddle Blankets",
    image:
      "https://m.media-amazon.com/images/I/81jCt4GloSL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/baby-reg/sunny-archer-march-2025-oceanside/3IGZYFHK9LVXS",
  },
  {
    title: "Baby Toy",
    image:
      "https://m.media-amazon.com/images/I/51aibx5vg9L._SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/baby-reg/sunny-archer-march-2025-oceanside/3IGZYFHK9LVXS",
  },
  {
    title: "Gift Card",
    image:
      "https://m.media-amazon.com/images/I/41QI1BoSQWL._SY445_SX342_QL70_FMwebp_.jpg",
    link: "https://www.amazon.com/baby-reg/sunny-archer-march-2025-oceanside/3IGZYFHK9LVXS",
  },
];
const RegistryItems = () => (
  <Box
    sx={{ padding: "64px 16px", backgroundColor: "background.paper" }}
    id="donate"
  >
    <Container>
      <Typography variant="h2" gutterBottom>
        Donate
      </Typography>
      <Typography variant="body1" paragraph>
        We appreciate your generosity in helping us prepare for our twins. Below
        are some items from our Amazon registry. Please visit our registry to
        mark items as purchased.
      </Typography>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: "contain",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </a>
              <CardContent>
                <Typography variant="body1" component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginTop: "40px", textAlign: "center" }}>
        <Button
          variant="contained"
          href="https://www.amazon.com/baby-reg/sunny-archer-march-2025-oceanside/3IGZYFHK9LVXS"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: { xs: "100%", md: "300px" } }}
        >
          View Full Registry
        </Button>
      </Box>
    </Container>
  </Box>
);

export default RegistryItems;
