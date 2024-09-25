import ConsultIntro from "@/components/ConsultIntro";
import Grow from "@/components/Grow";
import Nav from "@/components/Nav";

export default function Consulting() {
  return (
    <main>
      <Nav />
      <ConsultIntro />
      <Grow />

      {/* <section className="flex justify-between items-center px-12 mt-[25rem]">
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
        <div></div>
      </section>
      <section className="relative bg-[url('/images/consulting-4.png')] w-full h-[700px] overflow-hidden mx-auto flex flex-col justify-center px-4  bg-cover items-end pr-8"></section> */}
    </main>
  );
}
