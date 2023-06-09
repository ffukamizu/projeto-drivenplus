import ResetStyle from './styles/Reset';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogInPage';
import SignUp from './pages/SignUpPage';
import Subscriptions from './pages/SubscriptionsPage';
import Subscription from './pages/ChosenSubscriptionPage';
import Home from './pages/HomePage';
import { SubscriptionProvider } from './context/SubscriptionContext';
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <UserProvider>
                <SubscriptionProvider>
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
                            path="/subscriptions/:id"
                            element={<Subscription />}
                        />
                        <Route
                            path="/home"
                            element={<Home />}
                        />
                    </Routes>
                </SubscriptionProvider>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
