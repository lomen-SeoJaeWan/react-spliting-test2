import React, { useEffect } from "react";
// import Children1 from "../components/children1";
// import Children2 from "../components/children2";
// import Children3 from "../components/children3";
// import Children4 from "../components/children4";

const Children1 = React.lazy(() => import("../components/children1"));
const Children2 = React.lazy(() => import("../components/children2"));
const Children3 = React.lazy(() => import("../components/children3"));
const Children4 = React.lazy(() => import("../components/children4"));

export default function Main() {
  return (
    <>
      <Children1 />
      <Children2 />
      <Children3 />
      <Children4 />
    </>
  );
}
