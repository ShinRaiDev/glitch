import { redirect } from "next/navigation";

import React from "react";

function page() {
  redirect("/Home");
  return <div>page</div>;
}

export default page;
