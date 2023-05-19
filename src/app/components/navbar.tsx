export default function Navbar() {
  return (
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="page-scroll">
              <a href="#page-top">Home</a>
            </li>
            <li className="page-scroll">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="page-scroll">
              <a href="#skills">Skills</a>
            </li>
            <li className="page-scroll">
              <a href="#about">About</a>
            </li>
            <li className="page-scroll">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
