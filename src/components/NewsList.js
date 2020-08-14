import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const NewsList = ({ page }) => {
  const classes = useStyles();
  const [news, setNews] = useState();

  const fetchNews = () => {
    fetch(`/api/news/?page=${page}`, {
    })
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => err);
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  return (
    <div className={classes.root}>
      {news ? news.articles.map((article, i) => <NewsItem key={article._id} data={article} index={i + 1} classes={classes} />) : 'Loading...'}
    </div>
  );
};

export default NewsList;

NewsList.propTypes = {
  page: PropTypes.number.isRequired,
};
