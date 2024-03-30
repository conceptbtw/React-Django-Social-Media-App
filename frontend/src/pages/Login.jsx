import MainLogin from "../components/MainLogin";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="min-h-svh flex flex-col items-center bg-background">
      <MainLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
