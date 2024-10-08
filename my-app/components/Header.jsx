import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Mike<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="xl:flex items-center">
                    <Nav />
                </div>

                {/* mobile nav
                <div className="xl:hidden">
                    mobile nav
                </div> */}
            </div>
        </header>
    )
}

export default Header
