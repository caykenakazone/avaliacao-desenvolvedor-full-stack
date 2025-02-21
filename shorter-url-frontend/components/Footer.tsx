const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 shadow-md text-center p-5 ">
            <p className="text-white text-md font-semibold m-auto">
               Todos os direitos reservados - {new Date().getFullYear()}
            </p>
        </footer>
    );
}
export default Footer;