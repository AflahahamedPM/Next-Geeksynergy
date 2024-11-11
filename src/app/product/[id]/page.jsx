import { useParams } from "next/navigation";
import NavComponent from "../../../components/NavComponent";
import SingleProductContainer from "../../../components/SingleProductContainer";

const page = () => {
  const {id} = useParams()
  return (
    <>
    <head>
      <link rel="canonical" href={`https://next-geeksynergy.vercel.app/product/${id}`}/>
    </head>
      <NavComponent />
      <SingleProductContainer />
    </>
  )
};

export default page;
