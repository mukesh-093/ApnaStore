import ImageUpload from "@/components/ImageUpload";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { setProducts } from "@/redux/productSlice";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";


const AddProduct = () =>{
    const accessToken = localStorage.getItem("accessToken");
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState({
        productName: "",
        productPrice: "",
        brand: "",
        category: "",
        productDesc: "",
        productImg: [],
    })

    const handelChange = (e) =>{
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("productName", productData.productName);
        formData.append("productPrice", productData.productPrice);
        formData.append("brand", productData.brand);
        formData.append("category", productData.category);
        formData.append("productDesc", productData.productDesc);

        if (productData.productImg.length === 0 ) {
            toast.error("Please upload at least one image");
            return;
        }

        productData.productImg.forEach((img) => {
            formData.append("files", img);
        });

        try {
            setLoading(true);
            const res = await axios.post(`http://localhost:8000/api/v1/product/add`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    
                },
            });
            if (res.data.success) {
                dispatch(setProducts([...products, res.data.product]));
                toast.success("Product added successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to add product");
        } finally {
            setLoading(false);
        }

    }

    return(
        <div className="pl-[ 350px] py-5 pr-20 mx-auto px-80 bg-gray-100 ">   
            <Card className="w-full my-10 shadow-md">
                <CardHeader>
                    <CardTitle >Add Product</CardTitle>
                    <CardDescription>Enter Product details below</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col gap-2'>
                        <div className='grid gap-2'>
                            <Label>Product Name</Label>
                            <Input type='text'
                             name='productName' 
                             placeholder='Ex-Iphone' 
                             value={productData.productName}
                             onChange={handelChange}
                             required />
                        </div>
                        <div className='grid gap-2'>
                            <Label>Price</Label>
                            <Input type='number'
                             name='productPrice' 
                             placeholder='' 
                             value={productData.productPrice}
                             onChange={handelChange}
                             required />
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='grid gap-2'>
                                <Label>Brand</Label>
                                <Input type='text' 
                                 name='brand' 
                                 placeholder='Ex-apple' 
                                 value={productData.brand}
                                 onChange={handelChange}
                                 required />
                            </div>
                            <div className='grid gap-2'>
                                <Label>Category</Label>
                                <Input type='text' 
                                 name='category' 
                                 placeholder='Ex-mobile' 
                                 value={productData.category}
                                 onChange={handelChange}
                                 required />
                            </div>
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex items-center'>
                                <Label>Description</Label>
                            </div>
                            <Textarea 
                                name='productDesc'
                                placeholder='Enter brief description of product'
                                value={productData.productDesc}
                                onChange={handelChange}
                              />
                        </div>
                        <ImageUpload productData={productData} setProductData= {setProductData} />

                        <CardFooter className="flex-col gap-2">
                            <Button disabled={loading} onClick={submitHandler} className='w-full bg-pink-600 cursor-pointer shadow ' type='submit'>
                                {
                                    loading ? <span className="flex gap-1 items-center"><Loader2 className="animate-spin" />Please wait...</span>: "Add Product"
                                }
                            </Button>
                        </CardFooter>                        
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default AddProduct;