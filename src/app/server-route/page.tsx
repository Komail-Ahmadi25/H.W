import ServerOne from "@/src/components/ServerComponent";
import { serverSideFunction } from "@/src/utils/server-utils";
import React from "react";

function page() {
  const message = serverSideFunction();
  return (
    <div className="text-3xl text-white bg-gray-600">
      <h1>this is the server which renders server side -- {message}</h1>
      <ServerOne />
    </div>
  );
}

export default page;
