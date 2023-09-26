import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { StateContext } from "./Context";


const clerkPubKey = import.meta.env
  .VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

export const URL =
  "https://dummyjson.com/posts?limit=5";

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <StateContext>
        <Navbar />
        <SignedIn>
          <Posts />
        </SignedIn>

        <SignedOut>
          <h3>Please sign in!</h3>
        </SignedOut>
      </StateContext>
    </ClerkProvider>
  );
}

export default App;
