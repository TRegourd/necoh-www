export const filterArticles = (array, string) => {
  return array.filter(o => {
    return Object.keys(o).some(k => {
      if (k === "contentSnippet" || k === "title") {
        return o[k].toLowerCase().includes(string.toLowerCase())
      }
      if (k === "categories") {
        return o[k].some(t => {
          return t.toLowerCase().includes(string.toLowerCase())
        })
      }
    })
  })
}
