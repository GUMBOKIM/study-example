import { Link, Route, Router, useParams } from "./gumbo-router-dom";

const Home = () => <h1>Home Page</h1>;
const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>User Profile for ID: {id}</h1>;
};

const App = () => (
  <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
      </ul>
    </nav>
      <Router>
    <Route path="/" component={Home} exact />
    <Route path="/user/:id" component={UserProfile} />
  </Router>
  </>
);

export default App;
