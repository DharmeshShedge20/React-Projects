import React from "react";
import { Grid, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          bgcolor: "black",
          color: "white",
          textAlign: "center",
          py: 3,
          mt: 10,
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography
              className="pb-5 "
              variant="h6"
              sx={{ color: "white" }}
              gutterBottom
            >
              Company
            </Typography>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography
              className="pb-5 "
              variant="h6"
              sx={{ color: "white" }}
              gutterBottom
            >
              Solutions
            </Typography>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography
              className="pb-5 "
              variant="h6"
              sx={{ color: "white" }}
              gutterBottom
            >
              Documentation
            </Typography>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography
              className="pb-5 "
              variant="h6"
              sx={{ color: "white" }}
              gutterBottom
            >
              Legal
            </Typography>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5 " sx={{ color: "white" }} gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; Support: Support@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
