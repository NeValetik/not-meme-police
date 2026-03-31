import { cookies } from "next/headers";

export const getServerCookies = async () => {
  const cookieStore = await cookies();
  return cookieStore.getAll();
}

export const getClientCookies = () => {
  return document.cookie;
}

export const setClientCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/; max-age=360000; secure; samesite=strict; sameorigin`;
}

export const getClientCookie = (name: string): string | undefined => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match?.[2];
}
