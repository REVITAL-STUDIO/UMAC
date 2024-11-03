'use client'
import Nav from '@/components/Nav';
import { FormEvent } from 'react';

export default function Contact() {


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page reload

        const firstName = (document.getElementById('first_name') as HTMLInputElement).value;
        const lastName = (document.getElementById('last_name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const city = (document.getElementById('city') as HTMLInputElement).value;
        const state = (document.getElementById('state') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;

        const subject = `Contact Request from ${firstName} ${lastName}`;
        const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nCity: ${city}\nState: ${state}\nMessage:\n${message}`;

        // Open email client with pre-filled data
        window.location.href = `mailto:info@umallc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
        <Nav />
        <div className="min-h-screen flex justify-center items-center">
            <section className="flex flex-col md:flex-row justify-between items-center bg-transparent md:bg-white h-full w-full md:h-[35rem] md:w-[80%] rounded-3xl">
                <div className="hidden md:flex w-[50%] h-full rounded-3xl bg-[url('/images/contact.jpg')] bg-cover bg-no-repeat">
                </div>
                <div className="w-full md:w-[50%] h-full flex justify-center items-center rounded-3xl">
                    <form onSubmit={handleSubmit} className="w-[95%] max-w-[450px] sm:max-w-none md:w-[85%] flex flex-col bg-black text-white gap-6 px-8 py-8 rounded-[1.6rem] shadow-lg">
                        <div className='text-center'>
                            <h2 className="text-2xl font-semibold text-center mb-4">Get in <span className="text-[#]">Touch</span></h2>
                            <p className="text-[0.6rem] md:text-[0.8rem]">
                                Expect a response within 24 hours. We&apos;ll provide a detailed overview of how our solutions can support and grow your business.
                            </p>
                        </div>
                        <div className="flex flex-col gap-[0.7rem]">
                            <div className="flex gap-6">
                                <input
                                    required
                                    placeholder="First"
                                    id="first_name"
                                    type="text"
                                    className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] md:text-[0.9rem]"
                                />
                                <input
                                    placeholder="Last"
                                    id="last_name"
                                    type="text"
                                    className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] md:text-[0.9rem]"
                                />
                            </div>
                            <input
                                required
                                placeholder="Email"
                                id="email"
                                type="text"
                                className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] md:text-[0.9rem]"
                            />
                            <div className="flex gap-6">
                                <input
                                    placeholder="City"
                                    id="city"
                                    type="text"
                                    className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] md:text-[0.9rem]"
                                />
                                <input
                                    placeholder="State"
                                    id="state"
                                    type="text"
                                    className="border-b-[1px] bg-transparent border-white py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000 placeholder-white pt-[1.3rem] pb-0 text-[0.7rem] md:text-[0.9rem]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-[1rem] my-4">Message</label>
                                <textarea
                                    className="bg-black text-white border-[1px] border-white rounded-none py-2 px-2 text-[0.7rem] md:text-[0.9rem] focus:bg-[#7a7aaa83]  transition duration-1000 focus:outline-none "
                                    id="message"
                                />
                            </div>
                            <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-2 mt-4 w-fit transition-transform duration-200 hover:scale-105 active:scale-95">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        </>
    )

}
