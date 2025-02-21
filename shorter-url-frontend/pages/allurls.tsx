import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import UrlList from "@/components/UrlList";

const allurls: React.FC = () => {
    
    return (
        <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
            <Menu />
            <div className="w-full md:w-[80%] lg:w-[70%]  mx-auto overflow-x-auto p-4 md:p-8 lg:p-10">
                <UrlList />
            </div>
            <Footer />
        </div>
    );
}
export default allurls;