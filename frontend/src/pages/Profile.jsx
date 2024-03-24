import Header from "../components/Header";
import MainProfile from "../components/MainProfile";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <div className="min-h-svh flex flex-col items-center bg-background">
      <Header />
      <MainProfile />
      <Footer />
    </div>
  );
}
