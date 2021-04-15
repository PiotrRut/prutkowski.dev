import { NextPage } from 'next';
import Image from 'next/image';
import router from 'next/router';
import { useEffect, useState } from 'react';

// 404 Route
const NotFound: NextPage = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    while (countdown > 0) {
      const timer = setInterval(
        () =>
          setCountdown((prevProgress) =>
            prevProgress <= 0 ? 10 : prevProgress - 1
          ),
        1000
      );
      return () => {
        clearInterval(timer);
      };
    }
    if (countdown === 0) {
      router.push('/');
    }
  }, [countdown]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Image src="/404.svg" width="600" height="400" />
    </div>
  );
};

export default NotFound;
