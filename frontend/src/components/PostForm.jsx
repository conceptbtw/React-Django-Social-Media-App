import { useState } from "react";

export default function PostForm() {
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    const fileType = file.type.split("/")[0];

    if (fileType === "image" || fileType === "video") {
      setMedia(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="text">Text:</label>
        <textarea
          className="w-full p-2 flex justify-center items-center gap-2 outline-none border border-white border-opacity-10 rounded bg-black bg-opacity-10 placeholder:text-white placeholder:opacity-50"
          placeholder="Text"
          id="text"
          value={text}
          rows={4}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="media">Upload file:</label>
        <input
          className="flex file:w-full file:p-2 file:justify-center file:items-center file:border file:border-white file:border-opacity-10 file:rounded file:text-white file:bg-white file:bg-opacity-0 file:hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250"
          type="file"
          id="media"
          accept="image/*, video/*"
          onChange={handleMediaChange}
        />
      </div>
      <button
        className="w-full p-2 flex justify-center items-center border border-white border-opacity-10 rounded bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250"
        type="submit"
      >
        Post
      </button>
    </form>
  );
}
