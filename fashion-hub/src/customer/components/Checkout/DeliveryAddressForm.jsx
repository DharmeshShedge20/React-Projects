import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("Address"),
      city: data.get("City"),
      state: data.get("State"),
      zipCode: data.get("Zip/Postal Code"),
      mobile: data.get("Phone Number"),
    };

    console.log("address", address);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, ml: 50, bgcolor: "black" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacong={3}>
                <Grid item xs={12} sm={5} sx={{ margin: 2 }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={5} sx={{ margin: 2 }}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={10.5} sx={{ margin: 2 }}>
                  <TextField
                    required
                    id="Address"
                    name="Address"
                    label="Address"
                    fullWidth
                    autoComplete="given-address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={5} sx={{ margin: 2 }}>
                  <TextField
                    required
                    id="City"
                    name="City"
                    label="City"
                    fullWidth
                    autoComplete="given-City"
                  />
                </Grid>
                <Grid item xs={12} sm={5} sx={{ margin: 2 }}>
                  <TextField
                    required
                    id="State"
                    name="State"
                    label="State"
                    fullWidth
                    autoComplete="given-State"
                  />
                </Grid>
                <Grid item xs={12} sm={5} sx={{ margin: 2 }}>
                  <TextField
                    required
                    id="Zip/Postal Code"
                    name="Zip/Postal Code"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="given-Zip/Postal Code"
                  />
                </Grid>
                <Grid item xs={12} sm={5} sx={{ margin: 2 }}>
                  <TextField
                    required
                    id="Phone Number"
                    name="Phone Number"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-Phone Number"
                  />
                </Grid>
                <Button
                  sx={{ px: 3, ml: 2, mt: 2, bgcolor: "black" }}
                  size="large"
                  variant="contained"
                  type="submit"
                >
                  Deliver Here
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
