import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="pt-5  lg:px-5  shadow-lg pb-5">
      <div className="w-full">
        <h1 className="font-bold flex item-start px-20">Delivery Addrerss</h1>
        <div className="pl-20 pt-4">
          <AddressCard />
          <div className="py-10 w-full">
            <OrderTracker activeStep={3} />
          </div>

          <Grid className="space-y-5" container>
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
              <Grid
                item
                container
                className="shadow-xl rounded-md p-5 border border-lg"
                xs={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Grid item xs={6}>
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-[8rem] h-[8rem] object-cover object-top ml-10"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0-IcuNi6pBsCUe2KR7f5hdljQaccRgZyTg&usqp=CAU"
                      alt=""
                    />

                    <div className="space-y-2">
                      <p>Black jacket </p>
                      <p className="space-x-2">
                        <span>Color: pink</span>
                        <span>Size: XL</span>
                      </p>
                      <p>Seller: Gucci</p>
                      <p>Rs 999</p>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={6} className="flex items-center justify-end">
                  <Box sx={{ color: deepPurple[500] }}>
                    <StarBorderIcon
                      sx={{ fontSize: "2rem" }}
                      className="px-2 text-5xl"
                    />
                    <span>Rating and Review</span>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
