import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BeginnerDetail() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Valyrian Translator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            With the Valyrian translator app, users can engage in conversations
            by translating their words and phrases into Valyrian language.
            Valyrian translator app relies on an API to translate user input
            into the playful language of the Valyrian.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Cash Register Manager</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is a Cash Register Manager app.It tells the cashierr/user the
            amount to be returned in change to the customer with the minimum
            number of notes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is your Birthday Lucky ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is a Birthday luckiness checker app.It checks if the sum of
            digits of user's birthday is divisible by user's provided lucky
            number.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you know triangle ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is a triangle specific app.It calculates unknown parameter by
            taking known parameters of given triangle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Palindrome Birthday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is a Palindrome Birthday checker app.It takes user's birthday and
            tell whether the user was born on a palindrome day or not.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
