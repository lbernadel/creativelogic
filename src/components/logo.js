import Link from "next/link";

const Logo = () => (
  <div className="logo-container">
    <Link href="/">
        <img src="/static/creativelogic_long.png" alt="Creative Logic Logo" />
    </Link>

    <style jsx>{`
      .logo-container {
        height: inherit;
        width: 33.33%;
        margin: auto;
        float: left;
        }
      img {
        display: block;
        width: auto;
        margin: auto;
        height: inherit;
        cursor: pointer;
      }
      @media (max-width: 860px) {
        .logo-container {
          flex-shrink: 2;
          // align-self: flex-start;
          float: left;
        }
      }
    `}</style>
  </div>
);

export default Logo;
