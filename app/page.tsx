import Link from 'next/link'
export default function HomePage() {
    return (
        <div>
            <h1>home page</h1>
            <Link href="/faq">ir para faq</Link>
        </div>
    )
}