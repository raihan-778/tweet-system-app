import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App({ children }) {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>{children}</RouterProvider>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
