import "server-only";
export const serverSideFunction = () => {
  console.log("this is available on server");
  return "server function";
};
