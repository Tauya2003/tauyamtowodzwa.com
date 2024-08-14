import "./App.css";
import { MainProvider } from "./context/MainContext";
import { SidebarProvider } from "./context/SidebarContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <SidebarProvider>
      <MainProvider>
        <Layout />
      </MainProvider>
    </SidebarProvider>
  );
}

export default App;
