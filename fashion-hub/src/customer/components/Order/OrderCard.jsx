import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="mt-10 p-5 shadow-lg hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0-IcuNi6pBsCUe2KR7f5hdljQaccRgZyTg&usqp=CAU"
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p className="text-bold text-lg">Jacket</p>
              <p className="opacity-50 text-xs font-semibold">Size: XL</p>
              <p className="opacity-50 text-xs font-semibold">Color: black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>Rs 999</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "25px", height: "25px", pb: 0.5 }}
                  className="text-green-600"
                />
                <span className="text-bold text-lg ">Delivered on may 3</span>
              </p>
              <p>Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected delivery on may 3</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
