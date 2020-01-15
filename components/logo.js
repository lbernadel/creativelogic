import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <img src="./images/creativelogic.png" alt="Creative Logic Logo"/>
    </Link>
  </div>
);

export default Logo;