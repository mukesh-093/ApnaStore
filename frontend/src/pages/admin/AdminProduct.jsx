import { Input } from "@/components/ui/input";
import { Edit, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelector } from "react-redux";
import { Card } from "@/components/ui/card";


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/ImageUpload";



const AdminProduct = () =>{
    const {products} = useSelector(store => store.product);
    const [editProduct, setEditProduct] = useState(null);

    return(
        <div className="pl-[ 580px] py-10 pr-20 px-80 flex flex-col gap-3 min-h-screen bg-gray-100">
            <div className="flex justify-between">
                <div className="relative bg-white rounded-lg">
                <Input
                    type="text"
                    placeholder="Search Product..."
                    className="w-[ 400px] items-center"
                />
                <Search className="absolute right-3 top-1.5 text-gray-500" />
                </div>
                <Select>
                    <SelectTrigger className="w-[ 200px] bg-white">
                        <SelectValue placeholder="Sort by Price" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="lowToHigh">Low to High</SelectItem>
                        <SelectItem value="highToLow">High to Low</SelectItem>
                       
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            {
              products.map((product, index) =>{
                return <Card key={index} className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <img src={product?.productImg[0].url} alt="" className="w-25 h-25" />
                            <h1 className="font-bold w-96 text-gray-700">{product.productName}</h1>
                        </div>
                        <h1 className="font-semibold text-gray-800">₹ {product.productPrice}</h1>
                        <div className="flex gap-3">
                            <Dialog>
                                <form>
                                    <DialogTrigger asChild>
                                    <Edit className="text-green-500 cursor-pointer"/>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[ 625px] max-h-[ 740px] overflow-y-scroll">
                                    <DialogHeader>
                                        <DialogTitle>Edit Product</DialogTitle>
                                        <DialogDescription>
                                        Make changes to your product here. Click save when you&apos;re
                                        done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex flex-col gap-2">
                                        <div className="grid gap-2">
                                            <Label >Product Name</Label>
                                            <Input type="text" name="productName" placeholder="EX-IPhone" required/>
                                        </div>
                                        <div className="grid gap-2">
                                            <Label >Price</Label>
                                            <Input type="number" name="productPrice" placeholder="EX-100000" required/>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="grid gap-2">
                                                <Label>Brand</Label>
                                                <Input type="text" name="brand" placeholder="Ex-apple" required />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label>Category</Label>
                                                <Input type="text" name="category" placeholder="Ex-mobile" required />
                                            </div>
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label>Description</Label>
                                            </div>
                                            <Textarea name="description" placeholder="Product Description" required />
                                        </div>
                                        {/* <ImageUpload /> */}

                                    </div>

                                    <DialogFooter>
                                        <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit">Save changes</Button>
                                    </DialogFooter>
                                    </DialogContent>
                                </form>
                            </Dialog>
                            
                            <Trash2 className="text-red-500 cursor-pointer"/>
                        </div>
                    </div>
                </Card>
              })  
            }
        </div>

    )
}

export default AdminProduct;