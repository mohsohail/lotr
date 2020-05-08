import React from 'react';

import { BookDetailsWrapper, BookSelected, BookTitle, BookDescription } from '../styles/BookPage';

const BookDetailsContainer = ({ bookData }) => {
  return (
    <BookDetailsWrapper>
      <div>{!bookData.data.name && 'Select a book to read...'}</div>
      <BookSelected>
        <BookTitle>{bookData.data.name && bookData.data.name}</BookTitle>
        <BookDescription>
          {bookData.data.name &&
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue quisque egestas diam in. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Eget est lorem ipsum dolor sit amet consectetur. A scelerisque purus semper eget duis at tellus at. Nam aliquam sem et tortor consequat id porta nibh venenatis. Est placerat in egestas erat imperdiet sed euismod nisi. Quis varius quam quisque id diam vel. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Quis blandit turpis cursus in hac. Tellus id interdum velit laoreet. Risus quis varius quam quisque id diam. Ultricies integer quis auctor elit sed vulputate mi sit amet. Volutpat sed cras ornare arcu. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Eu scelerisque felis imperdiet proin. Nulla facilisi morbi tempus iaculis urna. Pretium lectus quam id leo in vitae turpis massa sed.'}
        </BookDescription>
      </BookSelected>
    </BookDetailsWrapper>
  );
};

export default BookDetailsContainer;
