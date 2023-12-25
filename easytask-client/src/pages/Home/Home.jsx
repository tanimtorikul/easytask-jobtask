import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | GoTrip -Travel Agency</title>
      </Helmet>
      <Banner />
    </div>
  );
};

export default Home;
