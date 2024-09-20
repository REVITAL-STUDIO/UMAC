import Image from "next/image"

export default function Products() {

    return (
        <main>
            <section className="flex my-[5rem] justify-around">
                <div className="flex flex-col items-start w-[50%] px-12">
                    <h1 className="text-[4.5rem] font-semibold">Our<br />Products</h1>
                    <p className="text-[1.15rem] w-[90%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="bg-[#530099] text-white rounded-[25px] text-xl px-12 py-4 mt-8">
                        Explore Our Products
                    </button>
                </div>
                <div className="flex gap-[10px]">
                    <div className="flex flex-col gap-[12px]">
                        <Image
                            src="/images/products-hero-1.png"
                            width={345}
                            height={250}
                            alt=""
                            className="rounded-[1rem]"
                        />
                        <Image
                            src="/images/products-hero-2.png"
                            width={345}
                            height={250}
                            alt=""
                            className="rounded-[1rem]"
                        />
                    </div>
                    <Image
                        src="/images/products-hero-3.png"
                        width={350}
                        height={350}
                        alt=""
                        className="rounded-[1rem]"
                    />
                </div>
            </section>
            <section>
                <h2 className="text-5xl text-right pr-12">High-Quality Medical<br /> Products for Professionals</h2>
                <div className="flex w-full justify-around">
                    <Image
                        src="/images/products-slide-1.png"
                        width={550}
                        height={550}
                        alt=""
                        className="rounded-[1rem]"
                    />
                    <div className="w-[40%] flex flex-col justify-center gap-4">
                        <div className="flex gap-8 text-2xl">
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                                <span>01</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                                <span>02</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                                <span>03</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-2xl">Durable</h3>
                            <p className="w-[90%] mt-2 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-[10rem] px-12">
                <h1 className="text-5xl font-semibold mb-4">Redefining The Industry</h1>
                <div className="flex gap-[3rem] justify-between">
                    <p className="text-lg w-[50%]">
                        Our Company provides you with the tools and products needed to enhance patient care and streamline medical processes.
                    </p>
                    <div className="flex flex-col gap-6 text-3xl relative top-[3rem] right-[3rem]">
                        <p>Gloves</p>
                        <p>Testing Kits</p>
                        <p>Wound Care</p>
                        <p>Ancillary Supplies</p>
                    </div>
                </div>
            </section>
            <section className="flex gap-12 my-[10rem] items-center px-12">
                <h2 className="font-semibold text-4xl">Solutions You Can Rely On</h2>
                <div className="flex flex-col gap-6 w-[25%]">
                    <Image
                        src="/images/solutions-1.png"
                        width={350}
                        height={350}
                        alt=""
                        className="rounded-[1rem]"
                    />
                    <h3 className="font-bold text-2xl">Create A Unified Community</h3>
                    <p>
                        With mParticle, HBO Max's marketing team is able to create audiences without engineering support and engage with their users more strategically.
                    </p>
                </div>
                <div className="flex flex-col gap-6 w-[25%]">
                    <Image
                        src="/images/solutions-2.png"
                        width={350}
                        height={350}
                        alt=""
                        className="rounded-[1rem]"
                    />
                    <h3 className="font-bold text-2xl">Acquisition Cost Lowered</h3>
                    <p>
                        With mParticle, HBO Max's marketing team is able to create audiences without engineering support and engage with their users more strategically.
                    </p>
                </div>
                <div className="flex flex-col gap-6 w-[25%]">
                    <Image
                        src="/images/solutions-1.png"
                        width={350}
                        height={350}
                        alt=""
                        className="rounded-[1rem]"
                    />
                    <h3 className="font-bold text-2xl">Enhance Operational Efficiencies</h3>
                    <p>
                        With mParticle, HBO Max's marketing team is able to create audiences without engineering support and engage with their users more strategically.
                    </p>
                </div>
            </section>
            <section className="relative bg-[url('/images/products-footer.png')] w-full h-[700px] overflow-hidden mx-auto flex flex-col justify-center px-4  bg-cover items-end pr-8">
                <div className="text-white">
                    <h2 className="font-bold text-3xl">One Company, One Goal:</h2>
                    <p className="text-lg">Empowering businesses through innovative products and tailored solutions.</p>
                </div>
            </section>
        </main>

    )

}

