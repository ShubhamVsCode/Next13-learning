import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex justify-between px-20 py-5">
            <div>Logo</div>
            <div className="space-x-5">
                <Link href={"/"}>Home</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>
            <div>
                <Link className="px-5 py-2 bg-purple-600 rounded-full" href={"/login"}>Login</Link>
            </div>
        </div>
    )
}

export default Navbar
