import { Link } from 'react-router'

export default function NotFound() {
  return (
    <>
      <h1>404 페이지를 만들 수 없습니다!</h1>
      <Link to="/">홈으로 이동</Link>
    </>
  )
}
