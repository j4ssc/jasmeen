import {Navigate} from "react-router-dom";

export default function ProtectedRoute({children}) {
    const token = localStorage.getItem("token");

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.email);
    if (!token || !user) {
        return <Navigate to="/" /> ;
    }

if (allowedRoles.length > 0 && !allowedRoles.includes(UserActivation.role)) {
    return <Navigate to ="/home" replace />;
}

return children;
}