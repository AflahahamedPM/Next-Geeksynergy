import { useParams } from "next/navigation";
import CategoryBasedProducts from "../../../components/CategoryBasedProducts";
import NavComponent from "../../../components/NavComponent";

const page = () => {
  const {category} = useParams()
  return (
    <>
    <head>
    <link rel="canonical" href={`https://next-geeksynergy.vercel.app/products/${category}`} />
    </head>
      <NavComponent />
      <CategoryBasedProducts />;
    </>
  )
};

export default page;
