import React from "react";
import Layout from "../Component/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

function Contact() {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, mr: 10, "& h4": { fontWeight: "bold" } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
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
      <Box
        sx={{
          m: 3,
          width: "500px",
          ml: 10,
          "@media(max-width:600px)": { width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  123456 (Toll free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "black", pt: 1 }} />
                  help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "aqua", pt: 1 }} />
                  9165285256
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
