import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledAppContainer = ({children, ...props}) => {
  return <div {...props}>{children}</div>;
};

const AppContainer = styled(unstyledAppContainer)`
  ${({theme}) => `
  text-align: center;
  background: ${theme.appBackgroundColor};
`};
`;

AppContainer.defaultProps = {};

AppContainer.propTypes = {};

export default AppContainer;
