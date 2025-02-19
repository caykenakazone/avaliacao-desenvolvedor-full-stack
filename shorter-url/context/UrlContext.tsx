import { createContext, useContext, useEffect, useState } from "react";
//interface que irá definir o tipo de dados que a url encurtada irá retornar
interface ShortUrl {
  id: string;
  originalUrl: string;
  shortUrl: string;
  accessCount: number;
  createdAt: string;
}
// interface que irá definir o tipo de dados que o contexto irá retornar
interface UrlContextType {
  urls: ShortUrl[];
  loading: boolean;
  error: string;
}

const UrlContext = createContext<UrlContextType | undefined>(undefined);


//Esse componente irá prover o contexto para os outros components dentro do UrlProvider, que é iniciado no _app.tsx, assim podendo acessar as urls encurtadas e exibir na tela de listagem.
export const UrlProvider = ({ children }: { children: React.ReactNode }) => {
  const [urls, setUrls] = useState<ShortUrl[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
// essa função irá buscar as urls encurtadas no backend e setar no estado urls para serem exibidas na tela de listagem. Assim nao precisando fazer a chamada toda vez que a tela for renderizada.
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch("http://localhost:8080/url/list");
        if (!response.ok) throw new Error("Erro ao buscar URLs");
        const data = await response.json();
        setUrls(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Erro ao carregar URLs");
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, []);

  return (
    <UrlContext.Provider value={{ urls, loading, error }}>
      {children}
    </UrlContext.Provider>
  );
};

// Hook que irá retornar o contexto para ser usado nos components que precisam acessar as urls encurtadas.
export const useUrls = () => {
  const context = useContext(UrlContext);
  if (context === undefined) throw new Error("useUrls deve ser usado dentro de um UrlProvider");
  return context;
};
