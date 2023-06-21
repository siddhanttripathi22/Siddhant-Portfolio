import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function InventoryTechDetail() {
  return (
    <div>
      {/*  Front-End Technologies:
       */}
      <br />
      <Accordion sx={{ mb: "0.2em" }} disabled>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Front-End Technologies</Typography>
        </AccordionSummary>
      </Accordion>
      {/* <br/> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A popular JavaScript library for building user interfaces, providing
            component-based architecture and efficient rendering.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>HTML/CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Utilized HTML and CSS to structure and style the website, ensuring a
            visually appealing design.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The programming language used to add interactivity and functionality
            to web pages.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Redux Toolkit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Implemented Redux to manage the application's state efficiently,
            enabling seamless data flow.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Back-End Technologies: */}

      <br />
      <Accordion disabled sx={{ mb: "0.2em" }}>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Back-End Technologies</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node.js</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A JavaScript runtime environment used to build scalable and
            efficient server-side applications.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Express.js</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A minimal and flexible Node.js web application framework that
            simplifies server-side development.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Image Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Integrating Cloudinary and Multer. Cloudinary is a cloud-based media
            management platform, while Multer is a middleware specifically
            designed for file handling in Node.js applications.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>MongoDB</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A popular NoSQL document-oriented database that stores data in
            flexible JSON-like documents.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* key features  */}
      <br />
      <Accordion sx={{ mb: "0.2em" }} disabled>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Key Features </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>User Authentication and Registration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>Secure user registration and login system.</li>
            <li>Authentication method email/password(JWT) .</li>
            <li>User profile management and password reset functionality.</li>
          </ul>
          {/* <p>The app includes a user authentication system to ensure secure access. Users can create accounts, log in, and manage their profiles.

</p> */}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dashboard serves as the central hub of the app. It provides an
            overview of important inventory metrics, such as total stock and
            product availability. It helps users quickly assess the status of
            their inventory at a glance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Product Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Users can add, edit, and delete products from the inventory. Each
            product entry typically includes details like name, description, SKU
            (stock-keeping unit), price, quantity, category, and any other
            relevant information.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Search and Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The app includes search and pagination capabilities, allowing users
            to quickly find specific products based on criteria such as name and
            category.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Responsiveness</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This Inventory Management React App is designed primarily for medium
            to large-screen-size devices It is more suitable for non-mobile
            devices.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
