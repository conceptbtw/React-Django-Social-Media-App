import PostItem from "./PostItem";

export default function PostList() {
  return (
    <ul className="flex flex-col justify-center items-center">
      <PostItem />
      <PostItem />
      <PostItem />
    </ul>
  );
}
