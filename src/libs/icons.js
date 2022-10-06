const reqSvgs = require.context("../assets/image/", true, /\.svg$/)
export const icons = reqSvgs.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf("/") + 1)
  images[key] = reqSvgs(path).default
  return images
}, {})
