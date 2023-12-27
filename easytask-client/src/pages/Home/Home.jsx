import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Users from "../../components/Users/Users";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | GoTrip -Travel Agency</title>
      </Helmet>
      <Banner />
      <Users/>
    </div>
  );
};

export default Home;
