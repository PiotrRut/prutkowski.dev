import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { NextPage } from 'next';
import Link from 'next/link';
import router from 'next/router';
import { useEffect,useState } from 'react';

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
    <Layout>
      <SEO title="Page Not Found" />
      <div className="container grid-cols-1 gap-y-16">
        <br />
        <h1 className="text-gray-200">404 Not Found</h1>
        <br />
        <i>
          <h5 className="text-gray-200">
            &#34;The HTTP 404, 404 Not Found, 404, Page Not Found, or Server Not
            Found error message is a Hypertext Transfer Protocol (HTTP) standard
            response code, in computer network communications, to indicate that
            the browser was able to communicate with a given server, but the
            server could not find what was requested. The error may also be used
            when a server does not wish to disclose whether it has the requested
            information.&#34;
          </h5>
        </i>
        <br />
        <h3 className="text-gray-200">
          In other words - either you can&#39;t type, or I can&#39;t code.. 🤷🏻‍♂️
          Either way, you should{' '}
          <Link href="/">
            <a>go home</a>
          </Link>
          !
        </h3>
        <br />
        <h3 className="text-gray-200">
          If you do nothing, you will be automatically redirected in {countdown}{' '}
          seconds.
        </h3>
      </div>
    </Layout>
  );
};

export default NotFound;
