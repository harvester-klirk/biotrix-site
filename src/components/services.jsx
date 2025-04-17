import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Notre Équipe</h2>
          <p>
            Développement de solutions robotiques : Conception de robots sur
            mesure pour des applications industrielles, médicales et
            environnementales. Ingénierie logicielle & embarquée : Développement
            de logiciels intelligents et de systèmes embarqués performants.
            Automatisation & intégration : Création de systèmes automatisés
            adaptés aux besoins spécifiques de chaque secteur. Sécurité
            radiologique (Zéro-Becq) : Dispositifs de détection, prévention et
            protection contre les risques liés à la radioactivité. Prototypage &
            conseil technologique : Accompagnement dans la conception et la mise
            en œuvre de projets technologiques innovants.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
