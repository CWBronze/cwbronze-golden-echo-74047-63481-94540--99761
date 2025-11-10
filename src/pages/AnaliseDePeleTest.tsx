import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AnaliseDePeleTest = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Análise de Pele - Teste
        </h1>
        <p className="text-center text-lg">
          Esta é uma página de teste simplificada para verificar se o roteamento está funcionando.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default AnaliseDePeleTest;
