import React from 'react';
import BackButton from 'reapp-ui/components/buttons/BackButton';

export default (
  <BackButton onTap={() => window.history.back()} stopPropagation>
    Back
  </BackButton>
);