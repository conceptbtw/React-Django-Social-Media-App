import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-svh flex flex-col items-center bg-background">
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
}
