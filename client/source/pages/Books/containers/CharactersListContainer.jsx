import React from 'react';

// import components
import List from '../../../components/List/List';

// import styled components
import { CharacterListItem, CharacterListHeader, SeeMore } from '../styles/BookPage';

const Item = ({ data }) => {
  return (
    <div>
      <CharacterListItem>{data.name}</CharacterListItem>
    </div>
  );
};

const headerComponent = () => {
  return (
    <div>
      <CharacterListHeader>Top Characters</CharacterListHeader>
    </div>
  );
};

// const footerComponent = () => {
//   return <div>see more</div>;
// };

const itemSeparator = () => {
  return <div style={{ height: 1, width: '100%', backgroundColor: '#ddd' }}></div>;
};

const CharactersListContainer = ({ mainCharactersData, history }) => {
  const handleClick = () => {
    history.push('/characters');
  };
  return (
    <>
      <List
        data={mainCharactersData}
        renderItem={(data) => <Item key={data._id} data={data} />}
        HeaderComponent={headerComponent}
        // FooterComponent={footerComponent}
        itemSeparator={itemSeparator}
      />
      <SeeMore>
        <span onClick={handleClick}>
          <a href="/characters">All Characters</a>
        </span>
      </SeeMore>
    </>
  );
};

CharactersListContainer.propTypes = {};

export default CharactersListContainer;
