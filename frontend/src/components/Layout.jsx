import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-svh flex flex-col items-center bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
