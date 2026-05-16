"use client";

import { useCallback, useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "valutin-cookie-consent";

type CookieConsentValue = boolean | null;

type UseCookieConsentResult = {
  hasConsented: CookieConsentValue;
  acceptAll: () => void;
  rejectAll: () => void;
};

function readStoredConsent(): CookieConsentValue {
  if (typeof window === "undefined") {
    return null;
  }

  const storedValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);

  if (storedValue === "true") {
    return true;
  }

  if (storedValue === "false") {
    return false;
  }

  return null;
}

function persistConsent(value: boolean): void {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, String(value));
}

export function useCookieConsent(): UseCookieConsentResult {
  const [hasConsented, setHasConsented] =
    useState<CookieConsentValue>(null);

  useEffect(() => {
    setHasConsented(readStoredConsent());
  }, []);

  const acceptAll = useCallback(() => {
    persistConsent(true);
    setHasConsented(true);
  }, []);

  const rejectAll = useCallback(() => {
    persistConsent(false);
    setHasConsented(false);
  }, []);

  return {
    hasConsented,
    acceptAll,
    rejectAll,
  };
}
