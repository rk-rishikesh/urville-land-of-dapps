import Link from 'next/link'
export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img className="w-18 h-9" src="https://urville.vercel.app/static/media/logo.a008d7057ef304898692.png"/>
    </Link>
  )
}
