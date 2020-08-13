import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const NewsItem = ({ data, index, classes }) => {
  console.log(data.summary);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}a-content`}
          id={`panel${index}a-header`}
        >
          <Typography className={classes.heading}>{data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {data.summary}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NewsItem;