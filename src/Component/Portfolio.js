import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ImageMasonry() {
  return (
    <div className=' container'>
    <Box>
      <Masonry columns={2} spacing={5}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
    </div>
  );
}

const itemData = [
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2024/02/P1.jpg',
    title: 'Fern',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2024/02/P2.jpg',
    title: 'Snacks',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2020/01/web-home-03.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2024/02/Raamah-1.jpg',
    title: 'Tower',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2020/01/web-home-02.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2024/02/Lab-1.jpg',
    title: 'Honey',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2024/02/P1.jpg',
    title: 'Fern',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2024/02/P2.jpg',
    title: 'Snacks',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2020/01/web-home-03.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2024/02/Raamah-1.jpg',
    title: 'Tower',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2020/01/web-home-02.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://www.infinitydesignhub.com/wp-content/uploads/2024/02/Lab-1.jpg',
    title: 'Honey',
  },
];
