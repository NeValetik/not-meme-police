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

