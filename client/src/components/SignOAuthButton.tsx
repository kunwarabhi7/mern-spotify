import { useSignIn } from "@clerk/clerk-react"
import { Button } from "./ui/button"


const SignOAuthButton = () => {
const {signIn,isLoaded} =    useSignIn()
if(!isLoaded){
    return null
}
const signInWithGoogle = () =>{
  signIn.authenticateWithRedirect({
    strategy:"oauth_google",
    redirectUrl:"/sso-callback",
    redirectUrlComplete:"/authCallback",
  })
}
return <Button onClick={signInWithGoogle} variant={'secondary'} className="w-full text-white bg-zinc-200 h-11">
    Continue with google
</Button>
  return (
    <div>SignOAuthButton</div>
  )
}

export default SignOAuthButton