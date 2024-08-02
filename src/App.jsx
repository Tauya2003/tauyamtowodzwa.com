import "./App.css";
import { SidebarProvider } from "./context/SidebarContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <SidebarProvider>
      <Layout />
    </SidebarProvider>
  );
}

export default App;
