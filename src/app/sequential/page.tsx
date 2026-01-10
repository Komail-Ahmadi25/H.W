import Author from "./Author";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Posts[] = await response.json();
  const filteredledPosts = posts.filter((post) => post.id % 10 === 1);
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {filteredledPosts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col gap-3 border-2 border-gray-300 rounded-md p-5 hover:shadow-lg hover:scale-105 duration-300"
        >
          <h1 className="font-bold text-4xl">{post.title}</h1>
          <p className="text-base">{post.body}</p>
          <Author userid={post.userId} />
        </div>
      ))}
    </div>
  );
}
