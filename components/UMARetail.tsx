import EmblaCarouselRetail from "./emblaCarouselRetail";

export default function UMARetail() {
  const slide = [0, 1, 2, 3];

  return (
    <section className="w-full ">
      <h2 className="mt-[4%]  text-center font-semibold my-[4%] xl:text-4xl text-xl ">
        Hear from Our Clients{" "}
      </h2>
      <div className="gap-x-4 flex items-center justify-center w-full  h-full my-4">
        <EmblaCarouselRetail slides={slide} />
      </div>
    </section>
  );
}
