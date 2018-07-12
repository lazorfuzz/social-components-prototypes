import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import { Button, IconButton } from '../UI';

const Wrapper = styled.div`
  margin: 10px 0;
`;

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: 'Lauren reacted to Big Buck Bunny (@0:09:12)',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/220px-Big_buck_bunny_poster_big.jpg',
          short: '😂😂😂 wow'
        },
        {
          title: 'Leon reviewed Tears of Steel (3/5)',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Tos-poster.png/220px-Tos-poster.png',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue augue turpis, ac lacinia ante rhoncus in. Fusce elit eros, consectetur et cursus et, convallis vel purus. Maecenas id fringilla augue. Sed at euismod odio, sed vehicula sapien. Etiam leo sem, vestibulum in augue in, malesuada sagittis turpis. Nulla turpis ante, hendrerit at facilisis non, pellentesque eget arcu. Vivamus eros orci, euismod eu ultrices mattis, sodales vitae leo. Aenean volutpat, tortor a ultrices molestie, augue sapien fermentum sem, ut venenatis nisl lectus et erat.',
          long: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue augue turpis, ac lacinia ante rhoncus in. Fusce elit eros, consectetur et cursus et, convallis vel purus. Maecenas id fringilla augue. Sed at euismod odio, sed vehicula sapien. Etiam leo sem, vestibulum in augue in, malesuada sagittis turpis. Nulla turpis ante, hendrerit at facilisis non, pellentesque eget arcu. Vivamus eros orci, euismod eu ultrices mattis, sodales vitae leo. Aenean volutpat, tortor a ultrices molestie, augue sapien fermentum sem, ut venenatis nisl lectus et erat.

          Pellentesque molestie, est vitae consectetur feugiat, dolor purus vestibulum turpis, sit amet congue elit ex nec felis. Integer sagittis mattis vulputate. Donec porta tincidunt faucibus. Sed facilisis erat ut vulputate rhoncus. Fusce elementum magna mollis massa sollicitudin, at vehicula metus tincidunt. Sed molestie purus elementum rhoncus tempus. Phasellus dapibus erat ut erat congue, vitae volutpat neque molestie. Nulla at dolor imperdiet, sodales nunc nec, aliquet nibh. Proin sollicitudin nec risus nec rhoncus. Maecenas malesuada, orci ac vehicula maximus, metus leo cursus odio, ut bibendum purus nibh vel lacus. Morbi dapibus purus vel sem tincidunt cursus. Fusce pretium rhoncus purus eget varius.

          Vestibulum eu leo tempus, suscipit est ac, scelerisque libero. Sed ac sapien id tortor ultricies venenatis. Praesent vulputate nibh fringilla ipsum iaculis, vitae lobortis justo gravida. Integer sagittis quam sit amet est ultricies pretium. Suspendisse pellentesque purus magna, auctor venenatis metus aliquet a. Praesent lacinia interdum dapibus. Cras nec dui ac nisi placerat sagittis nec eu est. Sed euismod urna sed leo cursus fringilla. Suspendisse condimentum in diam sed tincidunt. Fusce dignissim nunc nibh, quis gravida tortor facilisis ut. Nulla accumsan mi in ligula rutrum dignissim.`
        },
        {
          title: 'LeBron James recommended Valkaama',
          img: 'https://m.media-amazon.com/images/M/MV5BMjE2NWU5N2EtYjgxNS00MTdhLThlMWUtNDc3MDAwMGJkNzYxXkEyXkFqcGdeQXVyNDYwMTk5ODc@._V1_UY268_CR9,0,182,268_AL_.jpg',
          short: 'This movie made me a better basketball player 👀👀👀'
        },
      ]
    };
  }

  generateCards = () => this.state.cards.map(c => (
    <Card
      key={c.short}
      title={c.title}
      img={c.img}
      short={c.short}
      long={c.long}
    />
  ))

  render() {
    return (
      <Wrapper>
        {this.generateCards()}
      </Wrapper>
    );
  }
}

export default Feed;
