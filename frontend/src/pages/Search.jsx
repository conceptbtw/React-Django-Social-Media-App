import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSearch from "../components/MainSearch";

export default function Search() {
  return (
    <div className="min-h-svh flex flex-col items-center bg-background">
      <Header />
      <MainSearch />
      <Footer />
    </div>
  );
}
