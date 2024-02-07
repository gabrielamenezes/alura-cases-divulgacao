import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <h1>Você se perdeu e caiu na página 404 :O </h1>
            <Link href="/">ir para a home</Link>
        </>
    )
}