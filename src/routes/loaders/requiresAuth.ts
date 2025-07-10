import { redirect } from 'react-router'

export async function requiresAuth({ request }: { request: Request }) {
  // 로그인 여부 확인
  const token = localStorage.getItem('token')
  if (token) return true

  // url : https://localhost:5173/movies/ttl23456?a=1&b=2
  // pathname : /movies/ttl23456
  // search : ?a=1&b=2
  const url = new URL(request.url)
  const redirectTo = url.pathname + url.search
  console.log(redirectTo)
  return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
}
