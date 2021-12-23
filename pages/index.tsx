import type { NextPage } from "next";
import { Greeting } from "../components/Greeting";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Greeting>Hello, World!</Greeting>
    </div>
  );
};

export default Home;
