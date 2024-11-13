import { cardDetails } from "../constants/CardDetails";

const schemaMarkup = cardDetails.map((product) => {
  const imageUrls = [
    product.imageUrl.src,
    product.subImage1.src,
    product.subImage2.src,
  ];
  
  return (
    <script type="application/ld+json" key={product.id}>
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        category: product.category,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
        url: "https://next-geeksynergy.vercel.app",
        image: imageUrls,
        offers: {
          "@type": "Offer",
          name: product.title,
          url: `https://next-geeksynergy.vercel.app/product/${product.id}`,
          priceCurrency: "USD",
          price: product.price,
          priceValidUntill: "2025-05-31",
          availability: "https://schema.org/InStock",
        },
      })}
    </script>
  );
});

export default schemaMarkup;
