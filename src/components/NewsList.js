import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

// export default function SimpleAccordion() {

//   return (
//     <div className={classes.root}>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography className={classes.heading}>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography className={classes.heading}>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography className={classes.heading}>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   );
// }

const NewsList = () => {
  const classes = useStyles();
  const [news, setNews] = useState();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    fetch("https://newscatcher.p.rapidapi.com/v1/stocks?media=True&lang=en&ticker=AAPL", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_BUTTER_API_TOKEN}`
      }
    })
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setNews(data))
      .catch(err => console.log(err));
  }

  return (
    <div className={classes.root}>
      {news ? news.articles.map((article, i) => <NewsItem key={article._id} data={article} index={i + 1} classes={classes} />) : 'LOADING!!' }
    </div>
  );
};

export default NewsList;
