import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { BookDetails } from "./pages/BookDetails";
import { CreateBook } from "./pages/CreateBook"
import { EditBook } from "./pages/EditBook";
import { Delete } from "./pages/Delete";
import "./App.css"
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route path="book/create" element={<ProtectedRoute component={CreateBook} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="book/edit/:id" element={<EditBook />} />
          <Route path="book/delete/:id" element={<Delete />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
