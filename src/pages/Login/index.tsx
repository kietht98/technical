import { useContext, useState } from "react";
import { AuthContext } from "../../App";

const Login = () => {
  const [username, setUsername] = useState("");
  const authContext = useContext(AuthContext);

  const handleLogin = () => {
    authContext?.login(username);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
