import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    const [publicRepos, setPublicRepos] = useState(null)

    useEffect(() => {
        async function fetchRepoCount() {
            try {
                const res = await fetch('https://api.github.com/users/Faizan3N')
                if (!res.ok) return
                const data = await res.json()
                if (typeof data.public_repos === 'number') {
                    setPublicRepos(data.public_repos)
                }
            } catch (_) {
                // ignore network errors; keep UI graceful
            }
        }
        fetchRepoCount()
    }, [])
    return (
        <header className="sticky top-0 z-50">
            <nav className="supports-backdrop-blur:bg-white/60 bg-white/90 backdrop-blur border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-4 lg:px-6 py-3 flex flex-wrap justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/176225761?s=400&u=b0a7f0769fe8c1fbf9fd1715a950154449a339c5&v=4"
                            className="mr-3 h-12 w-12 rounded-full"
                            alt="Faizan Ali"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2 gap-2">
                        <Link
                            to="#"
                            className="btn-secondary text-sm"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="btn-primary text-sm"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) => `block px-2 py-2 transition ${isActive ? 'text-orange-700 font-semibold' : 'text-slate-700 hover:text-orange-700'}`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) => `block px-2 py-2 transition ${isActive ? 'text-orange-700 font-semibold' : 'text-slate-700 hover:text-orange-700'}`}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) => `block px-2 py-2 transition ${isActive ? 'text-orange-700 font-semibold' : 'text-slate-700 hover:text-orange-700'}`}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Faizan3N"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block px-2 py-2 transition text-slate-700 hover:text-orange-700"
                                >
                                    GitHub {publicRepos !== null ? <span className="text-slate-500">• {publicRepos} repos</span> : null}
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}