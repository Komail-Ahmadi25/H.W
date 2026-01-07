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
    <div className="w-full grid grid-cols-2 gap-6 bg-gray-500 p-6">
      {listOfUsers.map((user) => (
        <div
          key={user.id}
          className="bg-white text-green-400 p-3 flex flex-col gap-3 items-center"
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
