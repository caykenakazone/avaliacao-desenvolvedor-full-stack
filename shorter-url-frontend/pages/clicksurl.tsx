import { useState } from "react";
import Menu from "@/components/Menu";
import UrlStats from "@/components/UrlStats";
import { useUrls } from "@/context/UrlContext";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { RefreshCw } from "lucide-react";

const Cliques: React.FC = () => {
    const { urls, loading, error } = useUrls();
    const [inputId, setInputId] = useState(""); // Estado para armazenar o idShortUrl
    const [searchId, setSearchId] = useState(""); // Estado para ativar a pesquisa

    if (loading) return <p>Carregando URLs...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="flex flex-col min-h-screen">
            <Menu />

            <main className="flex-grow w-full md:w-[80%] lg:w-[70%] flex flex-col items-center justify-start mx-auto gap-10 p-4 md:p-8 lg:p-10">

                <div className="w-full bg-white p-5 rounded-lg shadow-lg">
                    <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-800">
                        Cliques na URL
                    </h2>


                    {/* Input para inserir o identificador da URL encurtada */}
                    <div className="flex flex-col md:flex-row gap-2 items-center justify-center mb-6">
                        <button
                            onClick={() => window.location.reload()}
                            className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full transition flex items-center justify-center"
                        >
                            <RefreshCw size={20} />
                        </button>
                        <input
                            type="text"
                            placeholder="Digite o Identificador da URL encurtada"
                            value={inputId}
                            onChange={(e) => setInputId(e.target.value)}
                            className="border p-2 rounded-md w-full md:w-1/2 text-center "
                        />
                        <button
                            onClick={() => setSearchId(inputId)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md transition"
                        >
                            Buscar
                        </button>
                    </div>

                    {/* Exibe as estatísticas quando um ID  for digitado */}
                    {searchId && <UrlStats idShortUrl={searchId} />}

                    <div className="overflow-x-auto mt-4 rounded-lg shadow-lg">
                        {/* Tabela onde é mostrado o número de cliques, juntamente com a URL original e o ID */}
                        <table className="w-full max-w-full bg-white shadow-lg ">
                            <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm md:text-base ">
                                <tr>
                                    <th className="p-3 text-left whitespace-nowrap">URL Encurtada</th>
                                    <th className="p-3 text-left whitespace-nowrap">Cliques</th>
                                    <th className="p-3 text-left whitespace-nowrap">Identificador</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Faz um map para percorrer todo array de urls */}
                                {urls.map((url) => (
                                    <tr
                                        key={url.id}
                                        className="even:bg-gray-100 transition-all text-xs md:text-sm lg:text-base "
                                    >

                                        <td className="p-3 break-words max-w-[200px] sm:max-w-xs">
                                            <a
                                                href={url.shortUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 font-medium hover:text-blue-500 transition hover:underline hover:text-blue-800"
                                            >
                                                {url.shortUrl}
                                            </a>
                                        </td>
                                        <td className="p-3 font-semibold text-gray-600">{url.accessCount}</td>
                                        <td className="p-3 font-semibold text-gray-700">{url.id}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </div >
    );
};

export default Cliques;
