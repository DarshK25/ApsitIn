import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HomePage from './HomePage';
import LoginPage from './components/auth/LoginPage';
import SignUpPage from './components/auth/SignUpPage';
import NetworkPage from './NetworkPage';
import NotificationsPage from './NotificationsPage';
import PostPage from './PostPage';
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
