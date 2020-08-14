import React, { useState } from 'react';
import NewsList from './components/NewsList';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NextIcon from '@material-ui/icons/NavigateNext';
import PrevIcon from '@material-ui/icons/NavigateBefore';
import './App.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    height: '20px',
    width: '20px'
  },
}));


function App() {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <div>
        </div>
      </header>
      <h1>The recent news</h1>
      <NewsList page={page} />
      <div>
        <Button
          variant="contained"
          color="primary"
          disabled={page < 2}
          className={classes.button}
          onClick={() => setPage(page === 1 ? page : page - 1)}
          startIcon={<PrevIcon />}
        />
        <span>{page}</span>
        <Button
          variant="contained"
          color="primary"
          disabled={page > 5}
          className={classes.button}
          onClick={() => setPage(page === 6 ? page : page + 1)}
          startIcon={<NextIcon />}
        />
      </div>
    </div>
  );
}

export default App;
