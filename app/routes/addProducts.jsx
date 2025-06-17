import { Form, Link, redirect } from "react-router";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FormSpacer } from "../components/FormSpacer";
import { validateNumber, validateText } from "../.server/validation";
import { ErrorMessage } from "../components/ErrorMessage";
import { createProducts } from "../models/products";

//posting to the database
export async function action({request}) {
    let formData = await request.formData();
    let title = formData.get("title");
    let price = formData.get("price");
    let quantity = formData.get("quantity");
    let imgSrc = formData.get("image");

    console.log({title, price, quantity, imgSrc});

    //validation
    let fieldErrors = {
        title: validateText(title),
        price: validateNumber(price),
        quantity: validateNumber(quantity),
        image: validateText(imgSrc)
    };

    //return errors if any
    if (Object.values(fieldErrors).some(Boolean)) {
        return {fieldErrors};
    }
    //save product to db
    let productObj = {
        title,
        price: Number(price),
        quantity: Number(quantity),
        imgSrc,
    };
    
    let result = await createProducts(productObj);
    console.log({result});

    //Redirect to individual product page
    return redirect("/products");
}


export default function AddProduct({actionData}) {
    return (
        <main className="mt-10 px-6">
            <Link to="/products" prefetch="intent" className="inline-block border border-[#c30f45] bg-[#231123] px-4 py-2 hover:scale-95 rounded-lg">Go to products</Link>
            <Form method="POST" className="max-w-xl mt-5 mx-auto space-y-3 border border-[#c30f45] bg-[#1d1c1d] px-3 py-2 rounded-md">
                <h1 className="my-4 tex-3xl text-[#c30f45] font-bold text-center underline">Fill this product form</h1>
                <FormSpacer>
                    <Label htmlFor="title" text="Item name"/>
                    <Input name="title" id="title" type="text" hasError={actionData?.fieldErrors.title}/>
                    {actionData?.fieldErrors.title ? (
                        <ErrorMessage text={actionData.fieldErrors.title} />
                    ) : null}
                </FormSpacer>

                <FormSpacer>
                    <Label htmlFor="price" text="Price"/>
                    <Input name="price" id="price" type="number"/>
                </FormSpacer>

                <FormSpacer>
                    <Label hmtlFor="quantity" text="Quantity"/>
                    <Input name="quantity" id="quantity" type="number"/>
                </FormSpacer>

                <FormSpacer>
                    <Label htmlFor="image" text="Image src"/>
                    <Input name="image" id="image" type="text"/>
                </FormSpacer>
                <Button text="Add product"/>

            </Form>
        </main>
    )
}