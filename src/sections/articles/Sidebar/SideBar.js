import React from "react"
import SideBar from "./style"
import { Link } from "~components"
import dayjs from "dayjs"
export default function SideBarSection({
  articles,
  handleSubmit,
  handleClick,
}) {
  function extractCategories(list) {
    if (list && list.length != 0) {
      const flatList = list
        .map(article => {
          return article.categories
        })
        .flat(1)

      const counts = {}

      for (const num of flatList) {
        counts[num] = counts[num] ? counts[num] + 1 : 1
      }

      return [["Tous les articles", list?.length]].concat(
        Object.entries(counts)
      )
    }
  }

  return (
    <SideBar>
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Recherche</SideBar.Title>
        <SideBar.Search>
          <form className="btn" onSubmit={handleSubmit}>
            <button type="submit" aria-label="search button">
              <i className="fa fa-search" />
            </button>
            <input type="text" placeholder="Rechercher un article" />
          </form>
        </SideBar.Search>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Articles Récents</SideBar.Title>
        <SideBar.RecentPost>
          {articles?.slice(0, 4).map(article => {
            return (
              <SideBar.RecentPostList key={article.title}>
                <Link to={`/articles/${article.id}`}>
                  <SideBar.RecentPostTitle>
                    {article.title}
                  </SideBar.RecentPostTitle>
                  <SideBar.RecentPostDate>
                    {dayjs(article.isoDate).format("DD-MM-YYYY")}
                  </SideBar.RecentPostDate>
                </Link>
              </SideBar.RecentPostList>
            )
          })}
        </SideBar.RecentPost>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Catégories</SideBar.Title>
        <SideBar.CateGory>
          {extractCategories(articles)?.map(category => {
            return (
              <SideBar.CateGorySingle key={category[0]}>
                <div className="category">
                  <Link to="#">
                    <SideBar.CateGoryTitle
                      as="span"
                      className="clickable"
                      onClick={handleClick}
                    >
                      {category[0]}
                    </SideBar.CateGoryTitle>
                  </Link>
                  <SideBar.CateGoryCount as="span">
                    {category[1]}
                  </SideBar.CateGoryCount>
                </div>
              </SideBar.CateGorySingle>
            )
          })}
        </SideBar.CateGory>
      </SideBar.Widgets>
    </SideBar>
  )
}
