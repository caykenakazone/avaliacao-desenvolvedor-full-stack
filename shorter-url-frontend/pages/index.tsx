import UrlShortener from '@/components/UrlShortner';
import '../styles/globals.css';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Card from '@/components/Card';

export default function HomePage() {
  //Pagina inicial, onde é exibido o menu, o encurtador de URL e os cards com informações sobre o site
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Menu />
      <main className="w-full md:w-[80%] lg:w-[70%] flex flex-col items-center justify-start  mx-auto gap-10 p-4 md:p-8 lg:p-10 ">
        <div id="short-url" className="w-full">
          <UrlShortener />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          <Card
            title="Encurte"
            texto="Encurte seus links de forma rápida e fácil, tornando o compartilhamento com amigos e seguidores ainda mais prático e eficiente"
            imagem="/icons8-url-90.png"
          />
          <Card
            title="Gratuito"
            texto="Seus Links de forma rápida, fácil e totalmente gratuita! Compartilhe com amigos e seguidores sem limites ou custos."
            imagem="/icons8-luz-acesa-90.png"
          />
          <Card
            title="Estatísticas"
            texto="Acompanhe o desempenho dos seus links encurtados, saiba quantas pessoas clicaram."
            imagem="/icons8-reequilibrar-o-portfólio-100.png"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}