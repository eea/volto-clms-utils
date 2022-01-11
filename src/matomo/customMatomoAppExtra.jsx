import React from 'react';
import { useSelector } from 'react-redux';
import { pushInstruction } from '@eeacms/volto-matomo/utils';

export const CustomMatomoAppExtra = () => {
  const { id } = useSelector((state) => state.users.user);
  React.useEffect(() => {
    if (id) {
      pushInstruction('setUserId', id);
    }
  }, [id]);

  return <React.Fragment />;
};

export default CustomMatomoAppExtra;
