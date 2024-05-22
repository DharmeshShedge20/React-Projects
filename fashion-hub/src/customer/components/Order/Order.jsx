import { Label } from "@headlessui/react";
import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { Label: "On The Way", value: "on_the_way" },
  { Label: "Delivered", value: "Delivered" },
  { Label: "Canceled", value: "Canceled" },
  { Label: "Returned", value: "Returned" },
];
const Order = () => {
  return (
    <div className="lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item sx={2.5}>
          <div className="px-20 mt-10 h-auto shadow-lg border bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg pt-5">Filter</h1>
            <div className="space-y-5 mt-5">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 v-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.Label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
