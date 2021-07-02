import "../styles/globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import firebase from "firebase/app";
import { config } from "../config/firebase.js";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
const clerkSignInURL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN;

const publicPages = [];

function RedirectToSignIn() {
  useEffect(() => {
    window.location = clerkSignInURL;
  });
  return null;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => router.push(to)}
    >
      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
