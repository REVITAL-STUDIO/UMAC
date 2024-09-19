import Nav from "./Nav";

export default function Hero() {
    return (
        <div className="px-12 py-6">
            <Nav />
            <section className="flex flex-col">
                <div className="relative bg-[url('/images/hero.png')] w-full h-[35rem] bg-cover bg-center rounded-[1.3rem] my-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-[1.3rem]"></div>

                    <div className="absolute left-[5%] bottom-[30%]">
                        <h1 className="text-white text-[2.5rem] w-[60%] font-bold mb-2">Delivering High-End Diagnostics and Medical Solutions for Better Healthcare</h1>
                        <p className="text-white text-md font-thin tracking-[0.09rem]">At UMA, we leverage cutting-edge technology and strategic partnerships to improve patient outcomes.</p>
                    </div>
                </div>
                <div className="flex justify-start gap-8">
                    <button className="bg-[#530099] text-white rounded-[20px] text-xl px-12 py-4">
                        About Us
                    </button>
                    <button className="bg-[#ffffff] text-black border-[1px] border-black rounded-[20px] text-xl px-12 py-4">
                        Schedule Consultation
                    </button>
                </div>
            </section>
        </div>
    );
}
