import Link from "next/link";

const Logo = () => (
  <div className="logo-container">
    <Link href="/">
      <a>
        <img src="/static/creativelogic_long.png" alt="Creative Logic Logo" />
      </a>
    </Link>

    <style jsx>{`
      .logo-container img {
        // text-align: center;
        display: block
        max-width: 250px
      }
      // img {
      //   min-height: 20vh;
      //   max-height: 35vh;
      // }
      @media (max-width: 600px) {
        .logo-container {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;
