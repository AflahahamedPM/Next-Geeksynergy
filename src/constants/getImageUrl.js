
const getImageUrl = (image) => typeof image === "string" ? image : image.src;

export default getImageUrl