type Author = {
  id: number;
  name: string;
};

export default async function Author({ userid }: { userid: number }) {
  const respose = await fetch(
    `https://jsonplaceholder.typicode.com/user${userid}`
  );
  const user: Author = await respose.json();
  return (
    <div>
      <h1 className="text-blue-500 font-bold">Author :{user.id}</h1>
    </div>
  );
}
