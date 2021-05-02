import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const NotFound: NextPage = () => {
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
      <Image src="/404.svg" width="300" height="200" />
      <br />
      <p>Sorry, but this page does not exist 😔</p>
      <p>
        Tap <Link href="/">here</Link> to go home!
      </p>
    </div>
  );
};

export default NotFound;
