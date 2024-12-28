import { Menu, User, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg"
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0 cursor-pointer">
                    <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                    <span className="text-xl tracking-tight">Cloud</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="transition-colors hover:text-blue-500">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-4 items-center">
                    <a href="#" className="flex py-4 px-4 border rounded-md transition-colors hover:bg-blue-500 hover:border-blue-500">
                    Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-4 rounded-md  hover:from-blue-700 hover:to-blue-900">
                        Create Account
                    </a>
                </div>

                <div className="lg:hidden flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul className="text-center space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href} className="text-xl transition-colors hover:text-blue-500">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center space-x-12 items-center mt-8">
                    <a href="#" className="flex py-4 px-4 border rounded-md transition-colors hover:bg-blue-500 hover:border-blue-500">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-4 rounded-md  hover:from-blue-700 hover:to-blue-900">
                        Create Account
                    </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar