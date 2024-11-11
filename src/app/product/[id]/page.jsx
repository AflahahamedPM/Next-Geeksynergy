import { useParams } from "next/navigation";
import NavComponent from "../../../components/NavComponent";
import SingleProductContainer from "../../../components/SingleProductContainer";
import Head from "next/head";

const page = () => {
  const {id} = useParams()
  return (
    <>
    <Head>
      <link rel="canonical" href={`https://next-geeksynergy.vercel.app/product/${id}`}/>
    </Head>
      <NavComponent />
      <SingleProductContainer />
    </>
  )
};

export default page;
