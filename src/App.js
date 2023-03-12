import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Route";

function App({ children }) {
  return (
    <div className="App">
      <RouterProvider router={router}>{children}</RouterProvider>
    </div>
  );
}

export default App;
