import { Header } from "components/Header/Header"
import { Outlet } from "react-router-dom"
import { MainContainer } from "./sharedLayout.styled"

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet/>
      </MainContainer>
    </>
    
  )
}