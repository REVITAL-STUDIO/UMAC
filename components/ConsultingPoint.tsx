interface ConsultingPointProps {
  text: string;
}

export default function ConsultingPoint({ text }: ConsultingPointProps) {
  return (
    <div className=" text-[#000]  font-semibold text-2xl  col-span-1 my-8  rounded-md gap-4   ">
      {text}
    </div>
  );
}
