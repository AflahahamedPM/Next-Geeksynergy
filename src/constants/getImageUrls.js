const getImageUrls = (...images) => {
  return images.map((image) => (typeof image === "string" ? image : image.src));
};

export default getImageUrls;
