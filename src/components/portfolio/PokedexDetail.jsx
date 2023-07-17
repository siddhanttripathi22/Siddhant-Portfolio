import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PokedexDetail() {
  return (
    <div>
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
            The app is designed to be responsive and optimized for various
            devices and screen sizes. Enjoy a seamless experience whether you're
            using it on a desktop, tablet, or mobile device.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Users can search for different Pokemons by entering its name or
            number in the search bar. The app communicates with the Pokeapi to
            fetch and display relevant Pokemon result. Clicking on a Pokemon
            image or title opens a detail page of that Pokemon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Bookmark Pokemon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Users can bookmark their favorite Pokémon, easily access and manage
            their collection, and dive into the world of Pokémon with
            convenience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Technical Stack</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The technical stack of the app includes React, HTML5, CSS3, and
            JavaScript ES6+. It communicates with the Pokeapi for Pokemons data.
            For seamless API integration, axios has been used.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
