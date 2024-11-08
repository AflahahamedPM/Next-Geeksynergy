export default function sitemap() {
    return [
      {
        url: 'https://next-geeksynergy.vercel.app/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://next-geeksynergy.vercel.app/product',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]
  }