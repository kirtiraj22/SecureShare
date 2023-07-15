import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[93vh] lg:items-center"
            >
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Empower Your Files.
                        <strong className="font-extrabold text-[#3D00B7] sm:block">
                            With SecureShare
                        </strong>
                    </h1>

                    <p className="mt-6 sm:text-xl/relaxed">
                        Unlock the power of decentralized file storage. Seamlessly share and access your files anywhere.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <NavLink
                            className="block w-full rounded-lg bg-[#3D00B7] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#f0f1f7f2] border border-[#3D00B7] hover:text-[#3D00B7] focus:outline-none focus:ring active:bg-[red-500] sm:w-auto"
                            to="/upload"
                        >
                            Get Started
                        </NavLink>

                        <a
                            className="block w-full px-12 py-3 text-sm font-medium text-[#3D00B7] shadow border border-[#3D00B7] rounded-lg hover:bg-[#3D00B7] hover:text-white focus:outline-none focus:ring active:text-[#3D00B7] sm:w-auto"
                            href="#about"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero


//reference : 1:05:10