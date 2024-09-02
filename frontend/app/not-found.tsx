import Link from 'next/link'

export default function NotFound() {
    return (
        <div className={"bg-white min-h-screen flex flex-col justify-center gap-2 items-center"}>
            <h2 className={"text-2xl"}>This Page No Exist</h2>
            <Link href={"/"}>
                <button className={"p-2 bg-black text-white rounded-md px-4"}>Go back Home</button>
            </Link>
        </div>
    )
}