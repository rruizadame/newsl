import React, { useState, useEffect } from 'react';
import { getNews } from '../../services/news-services';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Typography, Chip, Avatar, Link } from '@mui/material';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../../styles/Components.css';


const NewsContainer = ({ items, apiKeyNumber }) => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    retrieveNews();
  }, []);

  const retrieveNews = () => {
    const auxNews =  getNews(items, apiKeyNumber);
    setNews([auxNews[0]]);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box style={{ padding: '0.5rem' }}>
      <Grid container width="100%" className="mainContainer" spacing={2}>
        {news &&
          news.map((item) => (
            <Box key={item.urlToImage}>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{ minWidth: '10rem' }}>
                <Link target="_blank" href={item.url}>
			Image test
                </Link>
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8} >
                <Grid item xs={12} style={{ marginBottom: '2rem' }}>
                  <Link target="_blank" underline="none" href={item.url}>
                    <Typography variant="h5" color="#1565c0" component="div" gutterBottom>
                      {item.title}
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" className={'newsContentText'} component="div" gutterBottom>
                    {item.content}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={'newsFooter'}>
                  <Grid item xs={12} sm={12} md={6} xl={2}>
                    <Chip
                      style={{ minWidth: '5rem', maxWidth: '18rem' }}
                      avatar={<Avatar>{item.author ? item.author[0] : 'U'}</Avatar>}
                      color="primary"
                      variant="outlined"
                      label={item.author ? item.author : 'Unknown'}
                    ></Chip>
                  </Grid>
                  <Grid item style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} xs={12} sm={12} md={6} xl={4}>
                    <Typography variant="caption" component="div" gutterBottom>
                      {moment(new Date(item.publishedAt)).format('MMMM Do YYYY, h:mm:ss a')}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          ))}
      </Grid>
    </Box>
  );
};

NewsContainer.propTypes = {
  items: PropTypes.string,
  apiKeyNumber: PropTypes.number.isRequired,
};
NewsContainer.propDefault = {
  items: 'CRIPTOCOIN',
};

export default NewsContainer;
