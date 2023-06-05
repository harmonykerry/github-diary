import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavigationBar from "./component/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
