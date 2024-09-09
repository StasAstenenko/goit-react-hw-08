import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Loader } from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { isRefresh } from "./redux/auth/operations";
import { selectAuthRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/UserMenu/PrivateRoute";
import RestrictedRoute from "./components/UserMenu/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));

function App() {
  const dispatch = useDispatch();
  const refresh = useSelector(selectAuthRefreshing);

  useEffect(() => {
    dispatch(isRefresh());
  }, [dispatch]);

  return refresh ? (
    <Loader />
  ) : (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
