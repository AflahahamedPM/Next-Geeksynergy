import { useParams } from "next/navigation";
import CategoryBasedProducts from "../../../components/CategoryBasedProducts";
import NavComponent from "../../../components/NavComponent";
import Head from "next/head";

const page = () => {
  const {category} = useParams()
  return (
    <>
    <Head>
    <link rel="canonical" href={`https://next-geeksynergy.vercel.app/products/${category}`} />
    </Head>
      <NavComponent />
      <CategoryBasedProducts />;
    </>
  )
};

export default page;
