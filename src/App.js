import React, { Suspense } from "react";

const MainScreen = React.lazy(() => import("./Components/MainScreen"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <MainScreen />
      </Suspense>
    </>
  );
}

export default App;
