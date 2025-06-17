import { Link } from "react-router";
import { Welcome } from "../welcome/welcome";
import Products from "./products";

export function meta() {
  return [
    { title: "Electronics" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
   <Link to={"/Products"} prefetch="intent" className="border border-[#c30f45] bg-[#231123] px-4 py-2 hover:scale-95 rounded-lg mt-8 inline-block">Go to products
   </Link>
  );
}
