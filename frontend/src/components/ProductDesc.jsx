import React from "react";
import { Input } from "./ui/input";

const ProductDesc = ({ product }) =>{
    return(
        <div className="flex-col gap-4">
            <h1 className="font-bold text-4xl text-gray-800">{product.productName}</h1>
            <p className="text-gray-800 mt-5 mb-5">{product.category} | {product.brand}</p>
            <p className="text-pink-500 font-bold text-2xl mb-5"> ₹{product.productPrice}</p>
            <p className="line-clamp-10 text-muted-foreground mb-2">{product.productDesc}</p>
            <div className="flex gap-2 items-center w-[ 300px]">
                <p className="text-gray-800 font-semibold">Quantity :</p>
                <Input type="number" className="w-14" defaultValue={1} />
            </div>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md mt-5">Add to Cart</button>
        </div>
    )
}

export default ProductDesc;