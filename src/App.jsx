import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SkeletonLoader from "./Components/SkeletonLoader";

const LazyNavbar = React.lazy(() => import("./Components/Navbar"));
const LazyFooter = React.lazy(() => import("./Components/Footer"));
const LazyHome = React.lazy(() => import("./Components/Home"));
const LazyCategory = React.lazy(() => import("./Components/Category"));
const LazyLoginPage = React.lazy(() => import("./Pages/LoginPage"));
const LazyRegisterPage = React.lazy(() => import("./Pages/RegisterPage"));
const LazyMenuCreationPage = React.lazy(() =>
  import("./Pages/MenuCreationPage")
);
const LazyContactUsPage = React.lazy(() => import("./Pages/ContactUsPage"));
const LazyShipperCreationPage = React.lazy(() =>
  import("./Pages/ShipperCreationPage")
);
const LazySingleFoodPage = React.lazy(() => import("./Pages/SingleFoodPage"));
const LazyDashboardComponent = React.lazy(() =>
  import("./Pages/DashboardPage")
);
const LazyAboutUsComponent = React.lazy(() =>
  import("./Pages/AboutUsPage")
);
const LazyCartComponent = React.lazy(() => import("./Components/Cart"));

function App() {
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <LazyNavbar />
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/login" element={<LazyLoginPage />} />
        <Route path="/register" element={<LazyRegisterPage />} />
        <Route path="/create-menu" element={<LazyMenuCreationPage />} />
        <Route path="/fooditem" element={<LazySingleFoodPage />} />
        <Route path="/category" element={<LazyCategory />} />
        <Route path="/cart" element={<LazyCartComponent />} />
        <Route path="/dashboard" element={<LazyDashboardComponent />} />
        <Route path="/create-shipper" element={<LazyShipperCreationPage />} />
        <Route path="/contact-us" element={<LazyContactUsPage />} />
        <Route path="/about-us" element={<LazyAboutUsComponent />} />
      </Routes>
      <LazyFooter />
    </Suspense>
  );
}

export default App;
