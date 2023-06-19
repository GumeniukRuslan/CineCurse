import { Header } from "components/Header/Header"
import { Outlet } from "react-router-dom"
import { MainContainer } from "./sharedLayout.styled"
import { Suspense } from "react"
import { Loader } from "components/Loader/Loader"

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </MainContainer>
    </>
    
  )
}