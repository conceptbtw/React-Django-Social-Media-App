import { useState } from "react";

export default function EditForm() {
  const [picture, setPicture] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const placeholderFirstName = "Illia";
  const placeholderLastName = "Movchko";
  const placeholderUsername = "conceptbtw";
  const profilePicture = "/src/assets/images/profile.png";
  const placeholderBio = "Frontend Developer (React) from Lviv, Ukraine";

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="w-full flex justify-center items-center">
        <img
          className="w-48 h-48 border rounded-full"
          src={profilePicture}
          alt="Profile Picture"
        ></img>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="picture">Upload file:</label>
        <input
          className="flex file:w-full file:p-2 file:justify-center file:items-center file:border file:border-white file:border-opacity-10 file:rounded file:text-white file:bg-white file:bg-opacity-0 file:hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250"
          type="file"
          id="picture"
          accept="image/*"
          onChange={handlePictureChange}
        />
      </div>
      <div className="w-full flex gap-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="firstName">First name:</label>
          <input
            className="w-full p-2 flex justify-center items-center gap-2 outline-none border border-white border-opacity-10 rounded bg-black bg-opacity-10 cursor-pointer placeholder:text-white placeholder:opacity-50"
            placeholder={placeholderFirstName}
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          ></input>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="lastName">Last name:</label>
          <input
            className="w-full p-2 flex justify-center items-center gap-2 outline-none border border-white border-opacity-10 rounded bg-black bg-opacity-10 placeholder:text-white placeholder:opacity-50"
            placeholder={placeholderLastName}
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          ></input>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="username">Username:</label>
        <input
          className="w-full p-2 flex justify-center items-center gap-2 outline-none border border-white border-opacity-10 rounded bg-black bg-opacity-10 placeholder:text-white placeholder:opacity-50"
          placeholder={placeholderUsername}
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        ></input>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="bio">Bio:</label>
        <textarea
          className="w-full p-2 flex justify-center items-center gap-2 outline-none border border-white border-opacity-10 rounded bg-black bg-opacity-10 placeholder:text-white placeholder:opacity-50"
          placeholder={placeholderBio}
          id="bio"
          value={bio}
          rows={4}
          onChange={handleBioChange}
        ></textarea>
      </div>
      <button
        className="w-full p-2 flex justify-center items-center border border-white border-opacity-10 rounded bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250"
        aria-label="submit"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
