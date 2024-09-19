import BulletItem from "@/components/BulletItem";
import Hero from "@/components/Hero";
import Thumbnail from "@/components/Thumbnail";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="flex justify-between items-center px-12 my-[10rem]">
        <div className="flex flex-col gap-8 items-start w-[50%]">
          <p className="font-bold text-[3.5rem]">Transforming Healthcare Through Innovation and Collaboration</p>
          <p className="text-md">
            At UMA, we are dedicated to revolutionizing healthcare by leveraging cutting-edge technology,
            strategic partnerships, and personalized treatment plans. Our mission is to improve clinical outcomes
            and patient safety through innovation and collaboration.
          </p>
          <button className="bg-[#530099] text-white rounded-[20px] text-xl px-[6rem] py-8">
            Learn More
          </button>
        </div>
        <Image
          src="/images/home-pic-1.png"
          width={500}
          height={500}
          alt="care"
          className="rounded-[1rem]"
        />
      </section>
      <section className="flex my-[10rem] px-12">
        <div className="flex flex-col w-[25%] border-r-[1px] border-black justify-between pr-8 relative top-[6.5rem]">
          <div>
            <h3 className="font-bold text-2xl mb-2">Connecting Care, Transforming Lives</h3>
            <p className="text-lg">Leverage our expertise to enhance clinical outcomes and improve patient safety.</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">Connecting Care, Transforming Lives</h3>
            <p className="text-lg">Leverage our expertise to enhance clinical outcomes and improve patient safety.</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">Connecting Care, Transforming Lives</h3>
            <p className="text-lg">Leverage our expertise to enhance clinical outcomes and improve patient safety.</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 pl-[4rem]">
          <h1 className="font-bold text-4xl w-[75%]">Unlocking the Potential of Healthcare Professionals through Strategic Partnerships</h1>
          <div className="relative top-[3rem] bg-[url('/images/home-pic-2.png')] w-full h-[30rem] bg-cover bg-center rounded-[1.3rem]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-[1.3rem]"></div>
            <div className="absolute left-[5%] bottom-[30%]">
              <p className="text-white text-lg font-bold">
                At UMA, we understand the importance of collaboration and innovation in healthcare. By partnering with us,
                healthcare professionals gain access to cutting-edge diagnostics, personalized treatment plans, and world-class education.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-2 items-center pl-12 mt-[15rem] mb-[10rem]">
        <h2 className="font-bold text-[1.7rem] w-[30%]">Trusted by Leading Healthcare Providers</h2>
        <div className="flex gap-[6rem] justify-between">
          <Thumbnail url="/images/providers-1.png" />
          <Thumbnail url="/images/providers-2.png" />
          <Thumbnail url="/images/providers-3.png" />
          <Thumbnail url="/images/providers-4.png" />
        </div>
      </section>
      <section className="flex flex-col gap-[6rem] px-12 items-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center font-bold text-4xl">
            Transforming Healthcare Through Innovative Diagnostics
          </h1>
          <p className="text-center w-[60%] text-md">
            At UMA, we revolutionize healthcare by providing cutting-edge diagnostics and medical solutions. Our strategic partnerships with
            healthcare professionals enable us to personalize treatment plans and improve patient outcomes.
          </p>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-[8rem]">
            <BulletItem
              header="Connecting Care, Transforming Lives"
              text="Leverage our expertise to enhance clinical outcomes and improve patient safety."
            />
            <BulletItem
              header="Unparalleled Quality"
              text="We combine world-class scientific statistics, clinical data, and tools to deliver personalized healthcare solutions."
            />
          </div>
          <div className="flex flex-col gap-[8rem]">
            <BulletItem
              header="Connecting Care, Transforming Lives"
              text="Leverage our expertise to enhance clinical outcomes and improve patient safety."
            />
            <BulletItem
              header="Unparalleled Quality"
              text="We combine world-class scientific statistics, clinical data, and tools to deliver personalized healthcare solutions."
            />
          </div>
          <div className="flex flex-col gap-[8rem]">
            <BulletItem
              header="Connecting Care, Transforming Lives"
              text="Leverage our expertise to enhance clinical outcomes and improve patient safety."
            />
            <BulletItem
              header="Unparalleled Quality"
              text="We combine world-class scientific statistics, clinical data, and tools to deliver personalized healthcare solutions."
            />
          </div>
        </div>
        <button className="bg-[#530099] text-white rounded-[20px] text-xl px-[4rem] py-6">
          Explore ways to Help your Practice
        </button>
      </section>
      <section className="my-[10rem]">
        <h1 className="text-3xl text-center"><span className="font-bold">Terence Green:</span> A Leader in Healthcare Innovation</h1>
        <div className="flex justify-around items-center mt-[4rem] px-12">
          <Image
            src="/images/founder.png"
            width={650}
            height={650}
            alt="founder"
            className="rounded-[1rem]"
          />
          <p className="w-[30%] text-[1.25rem]">
            With over 30 years of pharmaceutical and medical sales experience, Terence Green has a distinguished track record in driving success across various
            healthcare sectors. A Xavier University of Louisiana graduate, Terence has excelled in recruiting, training, and leading sales teams, and has worked
            with a broad spectrum of healthcare providers. His extensive experience includes sales across national networks, specializing in therapeutic areas
            such as infectious diseases, neurology, and pain management.
          </p>
        </div>
      </section>
    </main>
  );
}
