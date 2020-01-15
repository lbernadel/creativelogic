import Link from "next/link";

const Logo = () => (
  <div className="logo-container">
    <Link href="/">
      <a>
        <img src="/static/creativelogic_long.png" alt="Creative Logic Logo" />
      </a>
    </Link>
    
    <style jsx>{`
      logo-container {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Logo;
