import { Link } from "react-router";
import { getProducts } from "../models/products";

export async function loader() {
    let products = await getProducts();
    console.log({products});
    

    let results = products.map((product) => ({
        ...product,
        _id:product._id.toString()
    }))
    

    return results;
}
export default function Products({loaderData}) {
    return (
        <main className="max-w-4xl mx-auto mt-5">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-4xl text-[#c30f45]">Products</h1>
                <Link to="/addProducts" prefetch="intent" className="border border-[#c30f45] bg-[#231123] px-4 py-2 hover:scale-95 rounded-lg">Add products</Link>

            </div>
            <ul className="grid grid-cols-3 mt-5 gap-3">
                {loaderData.map((product) => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`} className="hover:opacity-80">
                            <img src={product.imgSrc} alt={`image of ${product.title}`} className="w-full h-[300px] object-cover rounded-sm"/>
                            <p className="text-2xl font-bold text-[#c30f45]">{product.title}</p>
                            <p className="text-lg font-semibold">In stock: {product.quantity}</p>
                        </Link>
                    </li>
                ))}

            </ul>
            

            {/*TODO: Display products*/}
            
        </main>
    )
}
