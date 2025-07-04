import { client, ObjectId } from "../.server/mongo";


let db = client.db("Electronics");
let collection = db.collection("Products");
export async function getProducts(){
    let products = await collection.find().toArray();
    
    return products;
}

export async function getProductById(id) {
    let product = await collection.findOne({
        _id: ObjectId.createFromHexString(id)
    })
    return product;
}
export async function createProducts(product) {
    let result = await collection.insertOne(product)
    return result;
}