import logo from './logo.svg';
import './App.css';
import { FrappeProvider } from "frappe-react-sdk";
import { MyAuthComponent } from './components/login';
import Home from './pages/Home';
import Intro from './pages/Intro';
import users from './pages/users';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage'
import{Routes, Route} from 'react-router-dom';

function App() {
  return (
     <FrappeProvider url={process.env.BACKEND_URL} >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/signup" element={<Signuppage/>}/>
            <Route path="/intro" element={Intro}/>
            <Route path="/users" element={users}/>
          </Routes>
    </FrappeProvider>
    
  );
}

export default App;
