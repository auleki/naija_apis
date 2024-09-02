import Image from "next/image";
import LogoImg from "@/public/logo.svg"
export default function Logo(){
    return (
        <Image src={LogoImg} alt={"logo"} />
    )
}