import slugify from "slugify"

export default function makeUrlSafe(url) {
  return slugify(url, {
    strict: true,
    lower: true,
  })
}
