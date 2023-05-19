export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="panel-group" id="portfolio-panel" role="tablist" aria-multiselectable="true">
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="panel-heading" role="tab" id="guildlands-heading">
                <h3 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#portfolio-panel"
                                               href="#guildlands" aria-expanded="false"
                                               aria-controls="guildlands">Guildlands</a></h3>
              </div>
              <p>Browser based game</p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="panel-heading" role="tab" id="crazy-cab-heading">
                <h3 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#portfolio-panel"
                                               href="#crazy-cab-api" aria-expanded="false"
                                               aria-controls="crazy-cab-api">Crazy Cab</a></h3>
              </div>
              <p>Mobile game</p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="panel-heading" role="tab" id="tic-tac-toe-heading">
                <h3 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#portfolio-panel"
                                               href="#tic-tac-toe" aria-expanded="false" aria-controls="tic-tac-toe">Tic
                  Tac Toe</a></h3>
              </div>
              <p>Tic Tac Toe implemented with React</p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="panel-heading" role="tab" id="cookie-quest-api-heading">
                <h3 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#portfolio-panel"
                                               href="#cookie-quest-api" aria-expanded="false"
                                               aria-controls="cookie-quest-api">Cookie Quest</a></h3>
              </div>
              <p>Experimental game utilizing cookies</p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="panel-heading" role="tab" id="e-commerce-heading">
                <h3 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#portfolio-panel"
                                               href="#e-commerce" aria-expanded="false"
                                               aria-controls="e-commerce">E-commerce</a></h3>
              </div>
              <p>E-commerce template</p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="panel-heading" role="tab" id="movie-db-heading">
                <h3 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#portfolio-panel"
                                               href="#movie-db" aria-expanded="false" aria-controls="movie-db">Movie
                  Reviews</a></h3>
              </div>
              <p>Movie review site</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div id="guildlands" className="panel-collapse collapse" role="tabpanel"
                   aria-labelledby="guildlands-heading">
                <div className="panel-body">
                  <p>Guildlands is a browser based web game. Uses a time based turn system and focuses on group
                    management. Features a crafting system and live economy.</p>
                  <p className="text-center portfolio-links"><strong><a
                    href="https://guildlands.herokuapp.com/">Site</a><a
                    href="https://github.com/jasonadams023/guildlands">GitHub</a></strong></p>
                </div>
              </div>
              <div id="crazy-cab-api" className="panel-collapse collapse" role="tabpanel"
                   aria-labelledby="crazy-cab-heading">
                <div className="panel-body">
                  <p>Mobile app built using Unity at the 2018 ThoughtWorks Game Jam.</p>
                  <p className="text-center portfolio-links"><strong><a
                    href="https://thoughtworks.itch.io/crazy-cab">Site</a><a
                    href="https://github.com/Cabby-Coders">GitHub</a></strong></p>
                </div>
              </div>
              <div id="tic-tac-toe" className="panel-collapse collapse" role="tabpanel"
                   aria-labelledby="tic-tac-toe-heading">
                <div className="panel-body">
                  <p>Tic Tac Toe app created using React and Redux.</p>
                  <p className="text-center portfolio-links"><strong><a
                    href="https://tic-tac-toe-react-practice.herokuapp.com/">Site</a><a
                    href="https://github.com/jasonadams023/tic_tac_toe">GitHub</a></strong></p>
                </div>
              </div>
              <div id="cookie-quest-api" className="panel-collapse collapse" role="tabpanel"
                   aria-labelledby="cookie-quest-api-heading">
                <div className="panel-body">
                  <p>Experimental project using cookies and a state machine to play a game. (Note: This is an api end
                    point and has no front end. Instead it will generate and process new cookies as part of the
                    game.)</p>
                  <p className="text-center portfolio-links"><strong><a
                    href="https://cookie-quest-api.herokuapp.com/">Site</a><a
                    href="https://github.com/jasonadams023/cookie-quest-api">GitHub</a></strong></p>
                </div>
              </div>
              <div id="e-commerce" className="panel-collapse collapse" role="tabpanel"
                   aria-labelledby="e-commerce-heading">
                <div className="panel-body">
                  <p>An e-commerce template. Has admin functionality for setting and managing inventory and orders. Uses
                    Swipe for handling purchases.</p>
                  <p className="text-center portfolio-links"><strong><a
                    href="https://e-commerce-template.herokuapp.com/">Site</a><a
                    href="https://github.com/jasonadams023/e_commerce">GitHub</a></strong></p>
                </div>
              </div>
              <div id="movie-db" className="panel-collapse collapse" role="tabpanel" aria-labelledby="movie-db-heading">
                <div className="panel-body">
                  <p>Movie database project. Uses omdb api to gather information. Stores user data and reviews in
                    PostgreSQL database.</p>
                  <p className="text-center portfolio-links"><strong><a
                    href="https://movie-app-tts-hw.herokuapp.com/">Site</a><a
                    href="https://github.com/jasonadams023/omdb-api-project">GitHub</a></strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
