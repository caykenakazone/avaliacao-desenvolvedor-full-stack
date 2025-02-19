import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Importação do useRouter
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { motion } from "framer-motion";

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter(); // Hook para detectar mudança de rota

    // Fecha o menu automaticamente quando a rota mudar
    useEffect(() => {
        setIsOpen(false);
    }, [router.pathname]);

    return (
        <nav className="bg-gray-900 p-5 shadow-md">
            {/* Botão Hamburguer para Mobile */}
            <div className="flex justify-between items-center md:hidden">
                <Link href="/" className="text-white text-2xl font-bold">SHORTNER</Link>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>

            {/* Menu em Telas Grandes */}
            <ul className="hidden md:flex justify-center items-center gap-6">
                <li>
                    <Link href="/" className="text-white text-[18px] md:text-1xl px-4 py-2 rounded-lg transition-all duration-500 hover:bg-gray-100/20">
                        ENCURTAR
                    </Link>
                </li>
                <li>
                    <Link href="/clicksurl" className="text-white text-[18px] md:text-1xl px-4 py-2 rounded-lg transition-all duration-500 hover:bg-gray-100/20">
                        CLIQUES NA URL
                    </Link>
                </li>
                <li>
                    <Link href="/allurls" className="text-white text-[18px] md:text-1xl px-4 py-2 rounded-lg transition-all duration-500 hover:bg-gray-100/20">
                        URLs ENCURTADAS
                    </Link>
                </li>
            </ul>
            
            {/* Menu Lateral Mobile com animação */}
            <motion.div
                //initial define onde ele esta antes de abrir, animate e o estado do menu e muda de acordo com o estado
                initial={{ y: "-100%", opacity: 0 }}
                animate={isOpen ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full h-full bg-gray-900 shadow-lg z-50 px-5 py-6 flex flex-col items-start md:hidden"
            >
                <button onClick={() => setIsOpen(false)} className="self-end mb-4 text-white">
                    <CloseIcon size={28} />
                </button>
                <ul className="flex flex-col gap-4">
                    <li>
                        <Link href="/" className="text-gray-300 text-xl ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/clicksurl" className="text-gray-300 text-xl ">
                            Cliques na URL
                        </Link>
                    </li>
                    <li>
                        <Link href="/allurls" className="text-gray-300 text-xl  ">
                            URLs encurtadas
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </nav>
    );
};

export default Menu;
