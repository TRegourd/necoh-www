import slugify from "slugify"

export default function makeUrlSafe(url) {
  return slugify(url, {
    remove: /[*+~.()'"!:@?«»]/g,
    lower: true,
  })
}
