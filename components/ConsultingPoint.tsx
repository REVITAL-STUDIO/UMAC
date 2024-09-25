interface ConsultingPointProps {
  text: string;
}

export default function ConsultingPoint({ text }: ConsultingPointProps) {
  return (
    <div className=" text-[#B68D07] font-normal text-xl col-span-1 border p-4 py-20 rounded-md gap-4  italic ">
      {text}
    </div>
  );
}
