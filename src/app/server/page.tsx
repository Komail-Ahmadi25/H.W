import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
  website: string;
};
export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const listOfUsers: User[] = await response.json();
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {listOfUsers.map((user) => (
        <div
          key={user.id}
          className="flex flex-col gap-3 border-2 border-gray-300 rounded-md p-5 hover:shadow-lg hover:scale-105 duration-300"
        >
          <h1 className="font-bold text-4xl">{user.name}</h1>
          <Link
            className="text-blue-500 text-2xl font-semibold"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </Link>
          <Link className="text-orange-400 underline" href={user.website}>
            {user.website}
          </Link>
        </div>
      ))}
    </div>
  );
}
