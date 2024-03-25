import PostItem from "./PostItem";

export default function PostList() {
  return (
    <ul className="w-full flex flex-col justify-center items-center">
      <PostItem />
      <PostItem />
      <PostItem />
    </ul>
  );
}
