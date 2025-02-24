import { useUrls } from "@/context/UrlContext";

const UrlList: React.FC = () => {
    //useUrls é um hook que retorna um objeto com as urls, loading e error. Que vem do UrlContext
    const { urls, loading, error } = useUrls();
    if (loading) return <p>Carregando URLs...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
   
    //Table que irá mostrar as informações das urls
    return (
        <div className="w-full p-5 border border-gray-300 rounded-lg shadow-lg bg-white mx-auto">
            <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-800">URLs Encurtadas</h2>
            <div className="overflow-x-auto">
                <table className="w-full max-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
                    <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm md:text-base">
                        <tr>
                            <th className="p-3 text-left whitespace-nowrap">Identificador</th>
                            <th className="p-3 text-left whitespace-nowrap">URL Original</th>
                            <th className="p-3 text-left whitespace-nowrap">URL Encurtada</th>
                            <th className="p-3 text-left whitespace-nowrap">Cliques</th>
                            <th className="p-3 text-left whitespace-nowrap">Criado em</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls.map((url) => (
                            <tr
                                key={url.id}
                                className="border-t border-gray-300 even:bg-gray-100 hover:bg-gray-200 transition-all text-xs md:text-sm lg:text-base"
                            >
                                <td className="p-3 font-semibold text-gray-700">{url.id}</td>
                                <td className="p-3 break-words max-w-[200px] sm:max-w-xs">
                                    <a
                                        href={url.originalUrl}
                                        target="_blank"
                                        className="text-blue-600 font-medium hover:text-blue-800 transition"
                                    >
                                        {url.originalUrl}
                                    </a>
                                </td>
                                <td className="p-3 break-words max-w-[200px] sm:max-w-xs">
                                    <a
                                        href={url.shortUrl}
                                        target="_blank"
                                        className="text-green-600 font-medium hover:text-green-800 transition"
                                    >
                                        {url.shortUrl}
                                    </a>
                                </td>
                                <td className="p-3 font-semibold text-gray-600">{url.accessCount}</td>
                                <td className="p-3 text-gray-500">{new Date(url.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default UrlList;