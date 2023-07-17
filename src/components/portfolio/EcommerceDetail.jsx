import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function EcommerceTechDetail() {
  return (
    <div>
      {/*  Front-End Technologies:
       */}
      <br />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Responsiveness</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              User-friendly layout for seamless user experience on different
              devices.
            </li>
            <li>Adaptive navigation menus and components.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <br/>

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
            Leveraged the power of React to build a dynamic and interactive user
            interface.
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
            Employed JavaScript to add interactivity and enhance the user
            experience.
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
            Implemented Redux Toolkit(RTK) to manage the application's state
            efficiently, enabling seamless data flow.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Payment Gateway</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Integration with payment gateway APIs (Razorpay) to facilitate
            secure online payments.
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
          <Typography>Authentication and Authorization</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>Secure user registration and login system.</li>
            <li>Authentication method email/password (JSON Web Token).</li>
            <li>
              Restricts access to certain routes and functionalities based on
              the user’s role and permissions.
            </li>
            <li>User profile management and password reset functionality.</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Product Catalog</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              Display products with relevant information (name, description,
              price, images,ratings).
            </li>
            <li>Category filtering for easy navigation.</li>
            <li>
              Sort products by various criteria (price, popularity, etc.).
            </li>
            <li>
              Search functionality to find products based on keywords or
              filters.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Shopping Cart</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>Add products to the cart with quantity selection.</li>
            <li>Update quantities or remove items from the cart.</li>
            <li>Calculate and display subtotal and total prices.</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Checkout Process</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>Collect and validate user shipping and billing information.</li>
            <li>Multiple shipping options with real-time cost calculation.</li>
            <li>
              Integration with payment gateways for secure and smooth
              transactions.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Order Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>View order history and details for each user.</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Product Reviews and Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>Allow users to leave reviews and ratings for products.</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Admin Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              Backend interface for managing products, categories, and
              inventory.
            </li>
            <li>User management and access control.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
