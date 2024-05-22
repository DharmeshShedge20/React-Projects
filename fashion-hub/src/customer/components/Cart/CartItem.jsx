import { Button } from "@headlessui/react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex item-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Txzd_dXNaf2syStoGPyNFv0Abm5WitVPAw&usqp=CAU"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-3">
          <h1 className="font-semibold">Black Jacket</h1>
          <p className="opacity-70">Size: XL</p>
          <p className="opacity-70 mt-2">Seller: Gucci</p>
          <div className="flex items-center space-x-2 lg:text-md text-gray-900 mt-6">
            <p className="font-semibold">Rs 999</p>
            <p className="opacity-50 line-through">1299</p>
            <p className="text-green-600 font-semibold">20% off</p>
          </div>
        </div>
      </div>
      <div className="lg: flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "red" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-4 border rounded-sm">3</span>
          <IconButton sx={{ color: "green" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button className={"text-blue-800 px-2"}>REMOVE</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
