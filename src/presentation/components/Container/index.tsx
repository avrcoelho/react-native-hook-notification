import React, { useEffect, useState } from 'react';

const Container = (): JSX.Element => {
  const [a] = useState('');
  useEffect(() => {
    a ? 1 : 0;
  }, [a]);

  return <div />;
};

export default Container;
