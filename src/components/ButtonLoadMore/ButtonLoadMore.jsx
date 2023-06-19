import { LoadMore } from "./buttonLoadMore.styled"

export const Button = ({ loadMore }) => {
  return (
    <LoadMore onClick={loadMore}>Load more</LoadMore>
  )
}