"use client";
import { useAuth } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs/dist/client";

export default function GetUser() {
    const { isLoaded, userId, sessionId, getToken, signOut, isSignedIn } = useAuth();

    // In case the user signs out while on the page.
    if (!isLoaded || !userId) {
        return <h1>User not logged in</h1>;
    }

    return (
        <div>
            Hello, {userId} your current active session is {sessionId} : is signed in {isSignedIn.toString()}

            <SignOutButton />
        </div>
    );
}