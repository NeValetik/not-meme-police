"use client";

import { createContext, useContext, useCallback, useTransition } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries";
import { setLocale as setLocaleAction } from "./actions";

interface LocaleContextValue {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  const [isPending, startTransition] = useTransition();

  const handleSetLocale = useCallback(
    (newLocale: Locale) => {
      startTransition(async () => {
        await setLocaleAction(newLocale);
        window.location.reload();
      });
    },
    []
  );

  return (
    <LocaleContext.Provider
      value={{ locale, dictionary, setLocale: handleSetLocale, isPending }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

export function useTranslation(namespace: string) {
  const { dictionary } = useLocale();
  return dictionary[namespace] ?? {};
}
