import useData from "../hooks/useData";
import PostItem from "./PostItem";

export default function PostList() {
  const url = "";
  const { data, loading, error } = useData({ url });

  return (
    <ul className="w-full flex flex-col justify-center items-center">
      {/*data.map((item) => (
        <PostItem key={item.id} data={item} />
      ))*/}
      <PostItem />
    </ul>
  );
}
