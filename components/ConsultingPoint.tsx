interface ConsultingPointProps {
    text: string;
}

export default function ConsultingPoint({ text }: ConsultingPointProps) {
    return (
        <div className="bg-white text-black rounded-[1.5rem] w-[35rem] h-[6rem] flex justify-center items-center text-lg border-[1px] border-gray-200">
            {text}
        </div>
    );
}

