import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ImageUpload = ({productData, setProductData }) =>{
    return(
        <div className="grid gap-2">
            <Label>Product Images</Label>
            <Input type='file' id="file-upload" className="hidden" accept="image/*" multiple />
            <Button variant="outline">
                <label htmlFor="file-upload" className="cursor-pointer">
                    Upload Images
                </label>
            </Button>
        </div>
    )
}   
export default ImageUpload;