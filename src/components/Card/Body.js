import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  b,
  p,
  span {
    margin: 5px 0;
  }
`;

const Body = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Body.defaultProps = {};

Body.propTypes = {};

export default Body;
