

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://stock.adobe.com/in/images/premium-editable-vector-file-of-kabaddi-players-in-a-game-moment-best-for-your-digital-and-print-mockup/562891800',
    title: 'kabbadi',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://as2.ftcdn.net/v2/jpg/00/44/82/85/1000_F_44828508_8jXIuyDw6GjDX0OUvBWjt1mqzF0EdNyc.jpg',
    title: 'Cricket',
    
  },
  {
    img: 'https://as2.ftcdn.net/v2/jpg/03/00/94/99/1000_F_300949929_oDpCFkie6e4BxnI3HezC53KyffZ4fY2K.jpg',
    title: 'journey',
    
  },
  {
    img: 'https://stock.adobe.com/in/images/cup-coffee-beans-wooden/105907729',
    title: 'Coffee',
    
    cols: 2,
  },
  {
    img: 'https://as1.ftcdn.net/v2/jpg/01/35/01/28/1000_F_135012857_AZnyDvYAK0LA9aOunGA25UTEqyfWi0yi.jpg',
    title: 'cars',
    
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  
    cols: 2,
  },
];