import Image from "next/image";
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className={"flex gap-2"}>
                <Link href={"dashboard"}>Go To Dashboard</Link>
                {/*<Link href={"/settings"}>Settings</Link>*/}
            </section>
        </main>
    );
}
