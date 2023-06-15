import { Header } from "components/Header/Header"
import { Outlet } from "react-router-dom"

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}