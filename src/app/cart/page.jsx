import CartContainer from "../../components/CartContainer";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://next-geeksynergy.vercel.app/cart" />
      </Head>
      <CartContainer />
    </>
  );
};

export default page;
