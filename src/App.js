import "./App.css";

import Main from "./main";

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
