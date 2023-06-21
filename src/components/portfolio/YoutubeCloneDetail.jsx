import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function YoutubeCloneDetail() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Video Search and Playback</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Users can search for videos by entering keywords in the search bar. The app communicates with the YouTube Data API to fetch and display relevant video results. Clicking on a video thumbnail or title opens a video player that supports playback, with controls for play/pause, volume adjustment, and fullscreen mode.


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Categorized Video Content</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The YouTube Clone with React MUI organizes videos into various categories based on genres, topics, or themes. These categories could include popular genres like music, sports, news, gaming, and more. By categorizing videos, users can quickly navigate to the specific content they are interested in without having to perform individual searches.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Responsive Design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The YouTube Clone with React MUI ensures that the multiple categories feature is implemented with a responsive design.
          
           The layout adjusts seamlessly across various devices and screen sizes, including desktops, laptops, tablets, and mobile devices. This responsiveness provides a consistent and user-friendly experience, regardless of the platform used to access the app.


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



          The technical stack of the app includes React MUI, HTML5, CSS3, and JavaScript ES6+. It communicates with the YouTube Data API for video data.
          For seamless API integration, axios has been used.

          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}
