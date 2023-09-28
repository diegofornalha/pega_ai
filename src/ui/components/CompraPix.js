import React, { useEffect } from 'react';
import transakSDK from '@transak/transak-sdk';

const CompraPix = () => {

  useEffect(() => {
    // Inicialização do Transak SDK
    new transakSDK({
      apiKey: '79e83e2f-c542-411a-a7fb-6b1d7211fe9d',
      environment: 'PRODUCTION',
      themeColor: '000000'
    }).init();
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default CompraPix;
