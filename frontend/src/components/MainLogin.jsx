import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function MainLogin({ isLoggedIn, setIsLoggedIn }) {
  const url = "";

  const sendCredential = async (credential) => {
    try {
      const response = await axios.post(url, { credential });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const responseMessage = (response) => {
    console.log(response);
    sendCredential(response.credential);
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
