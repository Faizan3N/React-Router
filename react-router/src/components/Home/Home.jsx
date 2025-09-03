import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <section className="relative overflow-hidden rounded-2xl mx-3 sm:mx-6 mt-6 sm:mt-10 bg-gradient-to-br from-orange-50 via-white to-slate-50 border border-slate-200">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 sm:px-10 py-12 sm:py-16">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                            Build faster with React Router
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl">
                            Clean routes, modern UI, and batteries-included styling. Get started with a polished template and ship your app sooner.
                        </p>
                        <div className="mt-8 flex items-center gap-3">
                            <Link to="/" className="btn-primary">
                                Get started
                            </Link>
                            <Link to="/about" className="btn-secondary">
                                Learn more
                            </Link>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <img
                            className="w-full max-w-[520px] rounded-xl shadow-sm ring-1 ring-slate-200"
                            src="https://www.syncfusion.com/blogs/wp-content/uploads/2023/03/React-Router-A-Beginners-Guide-to-Essential-Navigation-Techniques.png"
                            alt="React Router navigation techniques"
                        />
                    </div>
                </div>
            </section>

            <h2 className="text-center text-2xl sm:text-4xl py-12 font-semibold">
                Crafted with Tailwind CSS
            </h2>
        </div>
    );
}