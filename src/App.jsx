import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import protectedRoutes from "./routes/ProtectedRoutes";
import publicRoutes from "./routes/PublicRoutes";
import NotFound from "./pages/NotFound";
import "./assets/css/remixicon.css";
import "./scss/style.scss";
import "react-datepicker/dist/react-datepicker.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Certificate from "./pages/certificate/Certificate";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Certificate />} />
            {protectedRoutes.map((route, index) => {
              return (
                <Route path={route.path} element={route.element} key={index} />
              );
            })}
          </Route>
          {publicRoutes.map((route, index) => {
            return (
              <Route path={route.path} element={route.element} key={index} />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
