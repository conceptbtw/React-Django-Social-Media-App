import Header from "../components/Header";
import MainNotifications from "../components/MainNotifications";
import Footer from "../components/Footer";

export default function Notifications() {
  return (
    <div className="min-h-svh flex flex-col items-center bg-background">
      <Header />
      <MainNotifications />
      <Footer />
    </div>
  );
}
