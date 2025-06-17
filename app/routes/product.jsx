import { Link } from "react-router";
import { getProductById } from "../models/products";

export async function loader({params}){
    //console.log(params);
    let id = params.id;
    let product = await getProductById(id);
    return product;
}

export default function OneProduct({loaderData}){
    return (
        <main className="mt-8 max-w-3xl mx-auto">
            <Link to="/products" prefetch="intent" className="border border-[#c30f45] bg-[#231123] px-4 py-2 hover:scale-95 rounded-[10px] inline-block">Go back</Link>
            <div className="flex gap-5 m-2">
                <img src={loaderData.imgSrc} className="w-[400px] h-[80vh] "/>
                <div className="text-xl">
                    <h1 className="font-bold text-2xl text-[#c30f45]">{loaderData.title}</h1>
                    <p>Ksh: {loaderData.price}</p>
                    <p className="text-[#c30f45]">In stock: {loaderData.quantity}</p>
                </div>
            </div>
        </main>
    )
}