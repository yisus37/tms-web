import { Card, Grid, Switch } from "@mui/material";
import bgImage from "components/assets/images/EXIKHAN.png";
import MDBox from "components/componets/MDBox";
import MDButton from "components/componets/MDButton";
import MDInput from "components/componets/MDInput";
import MDTypography from "components/componets/MDTypography";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import MuiLink from "@mui/material/Link";
export default function Login(){

    return(

        <Grid container sx={{background:"#3C60A3"}}>
            <Grid item sm={8}>
                <img style={{objectFit:"cover",width:"100%",height:"99vh",borderBottomLeftRadius:"50vh"}} src={bgImage}/>
            </Grid>
            <Grid item sm={4}>
            <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch /* checked={rememberMe} onChange={handleSetRememberMe} */ />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                /* onClick={handleSetRememberMe} */
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  /* component={Link} */
                  to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
            </Grid>
        </Grid>
    )
}