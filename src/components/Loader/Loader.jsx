import { Circles } from "react-loader-spinner"
import { LoaderPosition } from "./loader.styled"

export const Loader = () => {
  return (
    <LoaderPosition>
      <Circles
        width='200'
        color="#6643b5"
      />
    </LoaderPosition>
  )
}