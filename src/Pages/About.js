import React from "react";
import Layout from "../Component/Layout/Layout";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Layout>
      <Box
        sx={{
          m: 15,
          textAlign: "center",
          p: 1,
          "& h4": { fontWeight: "bold", m: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media(max-width:600px)": {
            mt: 0,
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          My Favorite Restaurant I always enjoy eating at a restaurant, probably
          because it means I do not have to cook! My mother always told me that
          it is much more healthier for me to have a meal at home. I actually
          like cooking, but sometimes it wastes a lot of time, because of my
          busy study. When the wonderful time comes to go , my first favorite
          place is the Teriyaki Restaurant. To our satisfaction, they have a lot
          kinds of food supplied to us. Everyone can find the favorite food
          here. It also provides good services and waiters are kind hearted,
          they always keep smiling and ask me whether everything is ok when I am
          eating. Each time when I go to this restaurant, I would like to take
          pictures of the food, It looks silly, but I just love how the food
          looks like. As an added bonus, it provides carryout service,and the
          order always arrive in a short time. I do like this restaurant,Do you
          want to have a try?
        </p>
        <br />
        <p>
          My Favorite Restaurant I always enjoy eating at a restaurant, probably
          because it means I do not have to cook! My mother always told me that
          it is much more healthier for me to have a meal at home. I actually
          like cooking, but sometimes it wastes a lot of time, because of my
          busy study. When the wonderful time comes to go , my first favorite
          place is the Teriyaki Restaurant. To our satisfaction, they have a lot
          kinds of food supplied to us. Everyone can find the favorite food
          here. It also provides good services and waiters are kind hearted,
          they always keep smiling and ask me whether everything is ok when I am
          eating. Each time when I go to this restaurant, I would like to take
          pictures of the food, It looks silly, but I just love how the food
          looks like. As an added bonus, it provides carryout service,and the
          order always arrive in a short time. I do like this restaurant,Do you
          want to have a try?
        </p>
      </Box>
    </Layout>
  );
}

export default About;
