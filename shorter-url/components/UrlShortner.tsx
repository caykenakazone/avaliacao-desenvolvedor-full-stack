import Image from "next/image";
import { useState } from "react";

//Esse é o componente que será responsável por encurtar a URL de fato
const UrlShortener: React.FC = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");

    const shortenUrl = async (url: string) => {
        //Esse método faz a requisição POST para o backend, e pega a shortUrl retornada para mostrar para o User na tela e ele poder acessa-lá
        try {
            const response = await fetch("http://localhost:8080/url/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ originalUrl: url }),
            });

            if (!response.ok) throw new Error("Erro ao encurtar a URL");

            const data = await response.json();
            setShortUrl(data.shortUrl); // Usa o shortUrl retornado do backend
            setError("");
            setOriginalUrl(""); // Limpa o campo de input
        } catch (err) {
            console.error(err);
            setError("Erro ao encurtar a URL");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (originalUrl.trim() !== "") {
            shortenUrl(originalUrl);
        } else {
            setError("Por favor, insira uma URL válida.");
        }
    };

    return (
        <div className="p-5 rounded-lg shadow-lg bg-white ">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 lg:flex-row lg:gap-10">
                <Image
                    src="/logoSemF.png"
                    width={120}
                    height={120}
                    alt="Encurte"
                    className="w-[100px] md:w-[120px] lg:w-[140px]"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 ">
                    Cole a URL que será encurtada
                </h2>

            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                    type="url"
                    id="url"
                    name="url"
                    required
                    placeholder="Cole o link aqui"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    className="p-2 border rounded"
                />
                <p className="text-sm text-gray-600 text-center p-2">
                    Encurtador é uma ferramenta para encurtar URLs e gerar links curtos.
                </p>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 transition-all duration-400 ease-in-out text-white font-bold py-2 px-4 rounded w-1/3 mx-auto transform hover:scale-105"
                >
                    Encurtar
                </button>

            </form>

            {/* Exibe a URL encurtada */}
            {shortUrl && (
                <p className="mt-4 text-green-500 text-center text-lg 
                bg-gray-100 p-2 rounded-lg
                ">
                    URL Encurtada:{" "}
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="underline  hover:text-blue-400">
                        {shortUrl}
                    </a>
                </p>
            )}

            {/* Exibe erros */}
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </div>
    );
};

export default UrlShortener;
