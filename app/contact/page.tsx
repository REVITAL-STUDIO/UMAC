import Image from "next/image"
export default function Contact() {

    return (
        <div className="min-h-screen flex justify-center items-center">
            <section className="flex flex-col md:flex-row justify-between items-center bg-transparent md:bg-white h-full w-full md:h-[30rem] md:w-[70%] rounded-3xl">
                <div className="hidden md:flex w-[50%] h-full rounded-l-3xl bg-[url('/images/contact.jpg')] bg-cover bg-no-repeat">
                </div>
                <div className="w-full md:w-[50%] h-full flex justify-center items-center rounded-3xl">
                    <form className="w-[95%] max-w-[450px] md:w-[80%] flex flex-col bg-black text-white gap-6 px-8 py-8 rounded-[1.6rem] shadow-lg">
                        <div>
                            <h2 className="text-2xl font-semibold text-center mb-4">Get in <span className="text-[#530099]">Touch</span></h2>
                            <p className="text-[0.6rem]">
                                You will get a response within 24 hours. We will explain in details how we can help you fuel and grow your brand within the stated budget.
                            </p>
                        </div>
                        <div className="flex flex-col gap-[0.7rem]">
                            <div className="flex gap-6">
                                <input
                                    placeholder="First"
                                    id="first_name"
                                    type="text"
                                    className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] "
                                />
                                <input
                                    placeholder="Last"
                                    id="last_name"
                                    type="text"
                                    className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] "
                                />
                            </div>
                            <input
                                placeholder="Email"
                                id="email"
                                type="text"
                                className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] "
                            />
                            <div className="flex gap-6">
                                <input
                                    placeholder="City"
                                    id="city"
                                    type="text"
                                    className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] "
                                />
                                <input
                                    placeholder="State"
                                    id="state"
                                    type="text"
                                    className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] "
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-[0.7rem]">message</label>
                                <textarea
                                    className="bg-black text-white border-[1px] border-white rounded-none py-2 px-2 text-[0.7rem] focus:bg-[#7a7aaa83]  transition duration-1000 focus:outline-none "
                                    id="message"
                                />
                            </div>
                            <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-2 mt-4 w-fit">
                            submit
                        </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )

}
