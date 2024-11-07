import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const App = () => {
  return (
    <>
    <header>
      <SignedOut>
        <SignInButton> 
          <Button  >Sign IN</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App