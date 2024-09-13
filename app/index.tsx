import Head from "next/head";
import Calculator from "./components/Calculator";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Simple Calculator</title>
      </Head>
      <Calculator />
    </div>
  );
};

export default Home;
