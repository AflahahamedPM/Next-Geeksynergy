import { cardDetails } from "../constants/CardDetails";
import getImageUrls from "../constants/getImageUrls";

const generateSchemaMarkup = () => {
  return cardDetails.map((product) => {
    const imageUrls = getImageUrls(
      product.imageUrl,
      product.subImage1,
      product.subImage2
    );

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      description: product.description,
      category: product.category,
      brand: {
        "@type": "Brand",
        name: product.brand,
      },
      url: `https://next-geeksynergy.vercel.app/product/${product.id}`,
      image: imageUrls,
      offers: {
        "@type": "Offer",
        name: product.title,
        url: `https://next-geeksynergy.vercel.app/product/${product.id}`,
        priceCurrency: "USD",
        price: product.price,
        priceValidUntil: "2025-05-31",
        availability: "https://schema.org/InStock",
      },
    };
  });
};

export default generateSchemaMarkup;
