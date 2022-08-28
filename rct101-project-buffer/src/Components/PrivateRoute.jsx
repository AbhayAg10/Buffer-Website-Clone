import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

{
  /* <PrivateRoute>
  <Component/> ->children
</PrivateRoute> */
}

export default function PrivateRoute({ children }) {
  const { state } = useContext(AuthContext);

  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
