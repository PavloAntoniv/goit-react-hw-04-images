import React from 'react';
import PropTypes from 'prop-types';
import { TfiFaceSad } from 'react-icons/tfi';
import { SorryImg, Text } from './SorryAlert.styled';

const SorryAlert = ({ images }) => {
  return (
    <>
      {images && !images.length && (
        <div>
          <SorryImg src="https://i.pinimg.com/originals/5e/a7/37/5ea737912f9f50da392a5579ea9d0334.gif" />
          <Text>
            Sorry, these photos were not found
            <TfiFaceSad />
          </Text>
        </div>
      )}
    </>
  );
};

SorryAlert.propTypes = {
  images: PropTypes.array.isRequired,
};

export default SorryAlert;
