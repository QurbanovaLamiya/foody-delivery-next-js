import { Fragment } from "react";
import Head from "next/head";

import Layout from "../../shared/Layout";
import RestaurantContainer from "../../features/restaurants";
import { restaurantAPI } from "../../api/restaurant";

const Restaurants = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Restaurants | Foody Delivery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/food-delivery-logo.jpg" />
      </Head>
      <Layout>
        <RestaurantContainer data={props} />
      </Layout>
    </Fragment>
  );
};

export default Restaurants;

export const getServerSideProps = async () => {
  const restaurant = await restaurantAPI.then((res) => res);

  if (!restaurant) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      restaurant: restaurant.data.restaurant.restaurants,
    },
  };
};