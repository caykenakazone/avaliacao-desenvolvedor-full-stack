import Image from "next/image";
interface CardProps {
    imagem: string;
    title: string;
    texto: string;
}

const Card: React.FC<CardProps> = ({ imagem ,title, texto }) => {
    return (
        <div className="p-6 flex flex-col items-center justify-start bg-white rounded-lg shadow-lg ">
            <Image src={imagem} 
            width={40}
            height={40}
            alt={title} className="w-[40px]" />
            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700">
                {title}
            </h2>
            <p className="text-[16px] text-gray-700 text-justify p-2 md:text-[18px] lg:text-[20px]">
                {texto}
            </p>
        </div>
    );
};
export default Card;