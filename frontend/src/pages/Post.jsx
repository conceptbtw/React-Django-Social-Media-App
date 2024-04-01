import Header from "../components/Header";
import MainPost from "../components/MainPost";
import Footer from "../components/Footer";

export default function Post() {
  return (
    <div className="min-h-svh flex flex-col items-center bg-background">
      <Header />
      <MainPost />
      <Footer />
    </div>
  );
}
