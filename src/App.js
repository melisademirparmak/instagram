import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './route/PrivateRoute';
import Home from './components/Home/Home';
import Error from './components/Error/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
