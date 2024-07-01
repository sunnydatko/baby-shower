import Box from "@mui/material/Box";
import Footer from "./Footer";
import ResponsiveMenu from "./ResponsiveMenu";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <ResponsiveMenu />
    <Box sx={{ marginTop: { xs: 0, md: 8 } }}>{children}</Box>
    <Footer />
  </>
);

export default Layout;
