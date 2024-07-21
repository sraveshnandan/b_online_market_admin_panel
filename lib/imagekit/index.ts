import ImageKit from "imagekit";

export const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PUBLIC_KEY!,
    publicKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!
})