interface BulletItemProps {
    header: string;
    text: string;
}

export default function BulletItem({ header, text }: BulletItemProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <h3 className="font-bold text-2xl mb-2">{header}</h3>
            <p className="text-lg w-full text-center">{text}</p>
        </div>
    );
}

