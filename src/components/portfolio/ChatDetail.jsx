import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ChatDetail() {
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
            This React chat app is designed to be responsive, adapting to
            different screen sizes and devices, including desktops, laptops,
            tablets, and mobile phones.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>

      <Accordion sx={{ mb: "0.2em" }} disabled>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Working</Typography>
        </AccordionSummary>
      </Accordion>
      {/* <br/> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Client-Side Implementation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              The client-side of the chat application has been built using
              React, a JavaScript library for building user interfaces.
            </li>
            <li>
              The Socket.io client library is included in the files to establish
              a connection with the server.
            </li>
            <li>
              The client creates a socket instance and connects to the server
              using the appropriate URL.
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
          <Typography>Server-Side Implementation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              The chat application starts with setting up a server using a
              backend Node.js framework Express.
            </li>
            <li>
              Socket.io is then integrated into the server to handle real-time
              communication between clients.
            </li>
            <li>
              The server listens for incoming socket connections and manages the
              exchange of messages between clients.
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
          <Typography>Establishing a Connection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              Once the client establishes a connection with the server, a socket
              connection event is triggered.
            </li>
            <li>
              This event allows the server to recognize the new client and
              perform any necessary setup or authentication.
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
          <Typography>Joining and Leaving Chat Rooms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>Users can join or leave the group conversations.</li>

            <li>
              Socket.io provides methods to handle joining and leaving chat
              rooms on both the client and server sides.
            </li>
            <li>
              When a user joins or leaves , the corresponding events are emitted
              to the server, which updates the user's membership status and
              notifies other participants.
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
          <Typography>Sending and Receiving Messages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              React components capture user input and emit custom events to the
              server using Socket.io.
            </li>
            <li>
              Socket.io enables real-time message exchange by emitting and
              listening to custom events.
            </li>

            <li>
              Each client listens for incoming messages and updates the chat
              interface in real-time.
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
          <Typography>Displaying and Rendering Messages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              React components dynamically render and display messages in the
              chat interface.
            </li>
            <li>
              Each message typically includes information such as the sender's
              name, timestamp, and the actual message content.
            </li>
            <li>
              By updating the React component's state, new messages are rendered
              and appended to the chat history.
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
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="points">
            <li>
              Users can create accounts and log in to the chat app and logout
              from chat app.
            </li>

            <li>
              Users can choose avatars from a rich variety of categories to
              personalize their chat profiles, making it easier to identify and
              differentiate participants in the chat app.
            </li>
            <li>Avatar and Password reset functionality.</li>
            <li>Enabling users to send emojis and texts .</li>

            <li>
              Each message includes sender's name, timestamp, and the actual
              message content.
            </li>

            <li>User connection and disconnection message display</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
