import { GoogleLogin } from "@react-oauth/google";

export default function MainLogin({ isLoggedIn, setIsLoggedIn }) {
  const responseMessage = (response) => {
    console.log(response);
    setIsLoggedIn(true);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <main className="w-full max-w-screen-sm p-4 flex flex-1 flex-col justify-center items-center text-white">
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </main>
  );
}
