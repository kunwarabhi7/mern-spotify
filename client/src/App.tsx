import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import AuthCallback from "./pages/Auth-callback/Auth-callback"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"

const App = () => {
  return (
    <>
 <Routes > 
  <Route path="/" element={<HomePage />}/>
  <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpFallbackRedirectUrl={'/authCallback'}/>}/>
  <Route path="/authCallback" element={<AuthCallback />} />
 </Routes>
    </>
  )
}

export default App