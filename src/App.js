import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Route";
import { ToastContainer } from "react-toastify";

function App({ children }) {
  return (
    <div className="App">
      <RouterProvider router={router}>{children}</RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
