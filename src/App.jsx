import ResetStyle from './styles/Reset';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogInPage';
import SignUp from './pages/SignUpPage';
import Subscriptions from './pages/SubscriptionsPage';
import Home from './pages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <Routes>
                <Route
                    path="/"
                    element={<LogIn />}
                />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
                <Route
                    path="/subscriptions/"
                    element={<Subscriptions />}
                />
                <Route
                    path="/home"
                    element={<Home />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
