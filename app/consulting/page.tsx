import ConsultingPoint from "@/components/ConsultingPoint"
import Image from "next/image"

export default function Consulting() {

    return (
        <main>
            <section className="flex gap-4 px-12 justify-between items-start mt-[8rem]">
                <div className="w-[40%] flex flex-col justify-start items-center gap-[36rem]">
                    <div>
                        <h1 className="text-[3.5rem] font-bold">Consulting for Growth and Success</h1>
                        <p className="text-xl">Empowering teams through personalized development programs.</p>
                    </div>
                    <div className="flex flex-col gap-12">
                        <ConsultingPoint text="Tailored Corporate Training" />
                        <ConsultingPoint text="Proven Results in Employee Engagement" />
                        <ConsultingPoint text="Certified TypeCoach Expertise" />
                        <ConsultingPoint text="Flexible, Scalable Solutions" />
                    </div>
                </div>
                <Image
                    src="/images/consulting-hero.png"
                    width={550}
                    height={550}
                    alt=""
                    className="rounded-[1rem] relative top-[8rem]"
                />
            </section>
            <section className="flex justify-between items-center px-12 my-[10rem]">
                <div className="w-[40%] relative top-[15rem]">
                    <h1 className="text-[3.5rem] font-bold">The more you grow, the stronger you become.</h1>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <Image
                    src="/images/consulting-1.png"
                    width={550}
                    height={550}
                    alt=""
                    className="rounded-[1rem] relative bottom-[8rem]"
                />
            </section>
            <section className="flex justify-between items-center px-12 mt-[25rem]">
                <div className="flex flex-col gap-[5rem]">
                    <Image
                        src="/images/consulting-2.png"
                        width={550}
                        height={550}
                        alt=""
                        className="rounded-[1rem] relative bottom-[8rem]"
                    />
                    <Image
                        src="/images/consulting-3.png"
                        width={550}
                        height={550}
                        alt=""
                        className="rounded-[1rem] relative bottom-[8rem]"
                    />
                </div>
                <div>

                </div>
            </section>
            <section className="relative bg-[url('/images/consulting-4.png')] w-full h-[700px] overflow-hidden mx-auto flex flex-col justify-center px-4  bg-cover items-end pr-8">
            </section>
        </main>
    )

}


