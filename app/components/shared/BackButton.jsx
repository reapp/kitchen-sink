import React from 'react';
import BackButton from 'reapp-ui/components/buttons/BackButton';

export default (
  <BackButton onClick={function() {
    // todo: get this to work with the staticcontainers
    // this.props.viewListScrollToStep(0);
    window.history.back();
  }} />
);