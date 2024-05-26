import { createContext, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
export const HomeContext = createContext(null);

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
  return (
    <div>
      <h1>This is home</h1>
    </div>
  );
};

export default Home;
