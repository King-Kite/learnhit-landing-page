import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NEXT_EMAIL_CONFIRMATION_URL } from "../../../../config";
import SplashScreen from "../../../../utils/SplashScreen"

const EmailConfirmation = ({ apiLoading, error, hasAccess, success, verified }) => {
  const [loading, setLoading] = useState(true);

  const message = success || error;

  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, [])

  useEffect(() => {
    if (apiLoading === false) {
      if (verified === true) {
        router.push("/")
      } else {
        router.push("/")
      }
    }
  }, [apiLoading, router, verified])

  return <SplashScreen title="Email Confirmation | LearnHit" />
}

export const getServerSideProps = async ({ params: { key } }) => {
  let error = null, hasAccess = false, success = null, verified = false, apiLoading = true;

  if (key !== null && key !== undefined) {

    const response = await fetch(NEXT_EMAIL_CONFIRMATION_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key })
    })

    const data = await response.json()

    if (response.status === 200) {
      apiLoading = false
      success = data?.detail || data?.success || "verified email address successfully"
      verified = true
    } else {
      apiLoading = false
      error = data?.detail || data?.error || "email address is not verified"
      hasAccess = true
      verified = false
    }
  }
  return {
    props: {
      apiLoading,
      error,
      hasAccess,
      success,
      verified,
    }
  }
}

export default EmailConfirmation;