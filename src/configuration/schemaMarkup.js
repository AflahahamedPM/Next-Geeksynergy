import { cardDetails } from "../constants/CardDetails";

const schemaMarkup = cardDetails.map((product)=>(
    <script type="application/ld+json" key={product.id}>
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.title,
      "description": product.description,
      "category":product.category,
      "brand": {
        "@type": "Brand",
        "name": product.brand
      },
      "url":"https://next-geeksynergy.vercel.app",
      "image":[product.imageUrl, product.subImage1, product.subImage2],
      "offers": {
        "@type": "Offer",
        "name":product.title,
        "url": `https://next-geeksynergy.vercel.app/product/${product.id}`,
        "priceCurrency": "USD",
        "price": product.price,
        "priceValidUntill":"2025-05-31",
        "availability":  "https://schema.org/InStock"
      }
    })}
  </script>
))

export default schemaMarkup