import { useState } from "react";
import LogoSVG from "../assets/svg/logo.svg";
import Links from "./Links";
import { ROUTES } from "../constants/route";

function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header className="relative bg-white px-6 py-5 mx-auto lg:top-10 lg:w-5/6 lg:max-w-300 lg:rounded-[200px] shadow-sm z-10">
            <nav className="flex justify-between items-center gap-4">
                {/* Logo */}

                <ul id="logo">
                    <li>
                        <img
                            className="w-3/4 md:w-auto"
                            src={LogoSVG}
                            alt="Logo"
                        />
                    </li>
                </ul>

                {/* Responsive Routes */}

                <ul
                    id="routes"
                    className={
                        !menuOpen
                            ? "hidden lg:flex gap-4 text-[#8C97A8]"
                            : "lg:hidden p-14 flex flex-col gap-4 text-[#8C97A8] items-center absolute top-full right-0 left-0 bg-white shadow-md shadow-neutral-600"
                    }
                >
                    {Object.keys(ROUTES).map((val, ind) => (
                        <Links
                            key={ind}
                            ref={val}
                            label={
                                ROUTES[val as keyof typeof ROUTES]
                                    ? ROUTES[val as keyof typeof ROUTES]
                                    : "Error"
                            }
                        />
                    ))}
                </ul>

                {/* Click to Action */}

                <ul id="cta" className="flex gap-4">
                    {/* Hamburg button */}
                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="lg:hidden flex items-center justify-center p-2 rounded-md"
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="space-y-1.5">
                            <span className="block h-0.5 w-6 bg-neutral-500"></span>
                            <span className="block h-0.5 w-6 bg-neutral-500"></span>
                            <span className="block h-0.5 w-6 bg-neutral-500"></span>
                        </div>
                    </button>

                    <li>
                        <button
                            type="button"
                            className="bg-linear-to-r bg-size-200 bg-left hover:bg-right font-medium transition-all from-[#007AFF] text-sm md:text-base to-white py-2.75 px-4.5 text-white from-50% to-50% rounded-[43px] hover:bg-white hover:text-[#007AFF] shadow-sm shadow-neutral-500/25 duration-500"
                        >
                            Contact Sales
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
