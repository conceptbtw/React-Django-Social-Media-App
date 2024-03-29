import Header from "../components/Header";
import MainEdit from "../components/MainEdit";
import Footer from "../components/Footer";

export default function Edit() {
  return (
    <div className="min-h-svh flex flex-col items-center bg-background">
      <Header />
      <MainEdit />
      <Footer />
    </div>
  );
}
