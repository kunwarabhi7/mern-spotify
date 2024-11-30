import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import AuthCallback from "./pages/Auth-callback/Auth-callback"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/chat/ChatPage"
import AlbumPage from "./pages/album/AlbumPage"

const App = () => {
  return (
    <>
 <Routes > 

  <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpFallbackRedirectUrl={'/authCallback'}/>}/>
  <Route path="/authCallback" element={<AuthCallback />} />
  <Route element={<MainLayout />}>
  <Route path="/" element={<HomePage />}/>
  <Route path="/chat" element={<ChatPage />} />
  <Route path="/albums/:albumId" element={<AlbumPage />} />
  </Route>
 </Routes>
    </>
  )
}

export default App