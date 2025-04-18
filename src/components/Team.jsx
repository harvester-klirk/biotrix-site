import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Notre Équipe</h2>
        </div>
        <div id="row" className="row">
          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              <img
                src="/img/team/ceo.jpg"
                alt="CEO"
                className="team-img"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/saad-chouihna-15935a85/",
                    "_blank"
                  )
                }
              />

              <div className="caption">
                <h4>Saad Chouihna</h4>
                <p>PDG | Gestion d’Entreprise</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              <img
                src="/img/team/dev.jpg"
                alt="Développeur"
                className="team-img"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ahmad-razouki/",
                    "_blank"
                  )
                }
              />

              <div className="caption">
                <h4>Ahmad Razouki </h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              <img
                src="/img//team/engineer.jpg"
                alt="Ingénieur Logiciel"
                className="team-img"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mahmood-albayadh/",
                    "_blank"
                  )
                }
              />

              <div className="caption">
                <h4>Mahmood Albayadh</h4>
                <p>Ingénieur Logiciel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
