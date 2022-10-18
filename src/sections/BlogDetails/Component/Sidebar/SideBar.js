import React from "react"
import SideBar from "./style"
import { Link } from "~components"
import dayjs from "dayjs"
import slugify from "slugify"
export default function SideBarSection({ articles }) {
  // function extractCategories(list) {
  //   if (list && list.length != 0) {
  //     const flatList = list
  //       .map(article => {
  //         return article.categories
  //       })
  //       .flat(1)

  //     const counts = {}

  //     for (const num of flatList) {
  //       counts[num] = counts[num] ? counts[num] + 1 : 1
  //     }

  //     return Object.entries(counts)
  //   }
  // }

  return (
    <SideBar>
      {/* Single Widgets */}
      {/* <SideBar.Widgets>
        <SideBar.Title>Search</SideBar.Title>
        <SideBar.Search>
          <form action="./">
            <i className="fa fa-search" />
            <input type="text" placeholder="Type to search" />
          </form>
        </SideBar.Search>
      </SideBar.Widgets> */}
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Articles Récents</SideBar.Title>
        <SideBar.RecentPost>
          {articles?.slice(0, 8).map(article => {
            return (
              <SideBar.RecentPostList key={article?.id}>
                <Link to={`/articles/${slugify(article?.title)}`}>
                  <SideBar.RecentPostTitle>
                    {article?.title}
                  </SideBar.RecentPostTitle>
                  <SideBar.RecentPostDate>
                    {dayjs(article?.isoDate).format("DD-MM-YYYY")}
                  </SideBar.RecentPostDate>
                </Link>
              </SideBar.RecentPostList>
            )
          })}
        </SideBar.RecentPost>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      {/* <SideBar.Widgets>
        <SideBar.Title>Catégories</SideBar.Title>
        <SideBar.CateGory>
          {extractCategories(articles)?.map(category => {
            return (
              <SideBar.CateGorySingle key={category[0]}>
                <Link to="#">
                  <SideBar.CateGoryTitle>{category[0]}</SideBar.CateGoryTitle>
                  <SideBar.CateGoryCount as="span">
                    {category[1]} articles
                  </SideBar.CateGoryCount>
                </Link>
              </SideBar.CateGorySingle>
            )
          })}
        </SideBar.CateGory>
      </SideBar.Widgets> */}
    </SideBar>
  )
}
