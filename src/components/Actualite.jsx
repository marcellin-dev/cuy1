import React, { useState } from "react";
import Event from "./Event.jsx";
import { Calendar, Tag } from "antd";
import ECHANGE from "../assets/images/ECHANGE.jpg";
import EAU from "../assets/images/EAU.jpg";
import mairie from "../assets/images/mairie.jpg";
import don from "../assets/images/don.jpeg";

const Actualite = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const datas = [
    {
      image: ECHANGE,
      title: "REUNION D’EVALUATION DES ACTIVITES MENEES SUR LE TERRAIN",
      description:
        "Entretien des infrastructures en eau : Yaoundé 1er installe les comités de gestion La Mairie de Yaoundé 1er a procédé le vendredi 20 janvier 2023 à l’installation de trois (03) comités de gestion des infrastructures d’adduction en eau potable dans la localité de Nkolondom. Et c’est Madame HADIDJA CHERIF, 4è Adjoint au Maire de la Commune, qui a sacrifié au rituel d’installation de l’ensemble des membres des comités de gestion des localités de Nkolondom 2 – Village Nsas ; Nkolondom 2 – Village Lendom-Sinai et Nkolondom 2 – Village Nkolbikum. En les installant dans leurs nouvelles fonctions, la représentante personnelle du Maire Jean Marie ABOUNA, qu’accompagnait Madame Bella Viviane de la Coopération Décentralisée, M. ESSOMBA Alin du Service Technique et M. NTSA Christophe du Service d’Hygiène, leur a surtout rappelé l’essence même de la décentralisation qui impose une implication massive des populations non sans leur marteler d’adopter des comportements civiques vis-à-vis de l’entretien de l’infrastructure publique mis à leur charge en respectant scrupuleusement l’ensemble des règles établies pour le bon fonctionnement de ces points d’adduction en eau potable. L’objectif premier de cette initiative est de permettre aux populations de bénéficier des infrastructures de qualité afin de s’approvisionner en permanence en eau potable. Cet important geste du Maire à leur endroit permet ainsi de mettre en avant de professionnalisme de chacun et de faire de ces derniers, les acteurs de la décentralisation et du développement local. Ils n’ont pas manqué de remercier la forte délégation de la Commune et le Maire par ricochet. Au travail cher collègues !!!",
    },
    {
      image: don,
      title: "REMISE DE DONS ",
      description:
        "Paquet minimum aux écoles primaires publiques : Mission accomplie pour la Mairie de Yaoundé 1er.La Mairie de Yaoundé 1er a procédé le 12 janvier 2023 dans la salle des actes de son immeuble siège, à la répartition du paquet minimum aux établissements scolaires primaires publiques de son ressort territorial. Ce sont au total 46 établissements qui sont rentrés en possession du matériel didactique. Constitué entre autres de cahiers de préparation, stylos à bille, registres d'appels journalier, effaceurs, ballons de football, chronomètres, de registres d'appels, ledit matériel a été financé à la fois par les crédits transférés alloués à la décentralisation et les fonds propres de la Commune, ceci au grand bonheur des récipiendaires qui n'ont pas manqué d'exprimer leurs satisfaction. « Nous voulons remercier grandement le Maire pour la main sans cesse tendue aux établissements scolaires. Notre joie est double car chaque école a reçu deux paquets émanation de la volonté de l'État au travers des crédits transférés et de celle de la Commune par cet appui du Maire à promouvoir une éducation de qualité. Désormais, nous avons tout ce qu'il nous faut pour réussir, et pouvons vous rassurer que nous en ferons bon usage pour le bien de nos élèves », a déclaré Madame Alima Thérèse de l'Inspection de l'Éducation de base de Yaoundé 1er. Pour le maire de Yaoundé 1er, la remise du paquet minimum vise une amélioration qualitative du rendement des écoles primaires publiques de sa circonscription. Ce qui contribuera à coup sûr, à mettre en œuvre la politique de développement de sa Commune, laquelle est adossée sur une philosophie « Oser Agir pour une ville moderne et agréable ».",
    },
    {
      image: EAU,
      title: "ADDUCTION EN EAU A YAOUNDE 1",
      description:
        "Une Nouvelle dynamique de construction d/'adductions d'eau potable  Le Maire de la Commune d’Arrondissement de Yaoundé 1er, poursuit sa dynamique de développement de son arrondissement, cadre logique de sa politique locale. Pied au plancher, l'édile du 1er Arrondissement de la capitale politique du Cameroun a démarré l’année avec la construction des points d’adduction en eau potable. Pour cette nouvelle saison, c'est le quartier Tsinga-Village, qui a bénéficié de ce bel ouvrage financé sous fonds propres de la Commune.  Implanté au lieu-dit CES de Tsinga-Village, cette adduction d'eau potable, bénéficie d'une alimentation à l'énergie solaire. En plus d'être équipée d'une structure métallique de quatre réservoirs, elle a une capacité haute de 20 mètres cubes  d'eau, pour une fourniture efficiente en matière d'eau potable. En cette période de résurgence de l'épidémie de choléra au Cameroun, une telle dotation trouve ainsi son sens en même temps qu’elle revêt un caractère salutaire pour les populations de la localité. C'est du moins le sentiment exprimé par les élèves du CES de Tsinga-Village, et les riverains de cette localité qui n’ont pas manqué d’exprimer leur satisfécit, mais surtout louer la volonté et le dynamisme de leur Maire a toujours œuvrer pour l’amélioration de leurs conditions de vie. Cette adduction d'eau potable permettra de pallier les  pénuries de la précieuse denrée connues dans cette localité d'une part, et  d'autre part,  d'éviter d'éventuelles contaminations aux maladies hydriques au sein de la Commune qu’il dirige. Signalons que de réalisations similaires sont en cours d'exécution dans plusieurs autres localités  notamment, les quartiers Bilono,  Emana et Nkol-Tsoungui. Elles s'étendront progressivement vers d'autres quartiers de la Commune d’Arrondissement de Yaoundé 1er. Pour le Maire Jean Marie ABOUNA, « Oser Agir pour une ville moderne et agréable », doit être suivi de réalisations sur le terrain.  « Le professionnalisme dont vous faites preuve au travail, la compréhension avec les employés sur le terrain et la participation active au travail d’équipe font de vous des exemples à suivre ». L’a martelé monsieur le maire aux nombreux responsables de la municipalité en charge de ces projets qui lui tiennent tant à cœur. ",
    },
    {
      image: mairie,
      title: "ADOPTION DU BUDGET 2023",
      description:
        "Mairie de Yaoundé  1er : Le document de cadrage sur l'orientation  budgétaire  adopté  La proposition de cadrage budgétaire et du développement de la commune a été adoptée par acclamations.  C'était le 13 décembre 2022, au cours du débat d'orientation budgétaire de la Commune d’Arrondissement de Yaoundé 1er. Placés sous la présidence du représentant du Préfet du Mfoundi et présidés le Maire Jean Marie ABOUNA, les travaux tenus dans la salle des Actes de l’hôtel de ville de Yaoundé 1er, ont connu la participation de l'Exécutif Municipal, la Secrétaire Générale de la Commune, des Conseillers municipaux, les représentants du Programme National du Développement Participatif (PNDP) pour la région du Centre, des autorités traditionnelles ainsi que des chefs de services de la Mairie. Au cours de ces échanges fructueux, les conseillers municipaux ont soumis les préoccupations de leurs populations respectives à l'appréciation de l'Exécutif Communal, avant de passer à l'approbation du document de cadrage budgétaire et du développement de la Commune. Pour le Maire du 1er Arrondissement  de Yaoundé, les doléances des  Conseillers municipaux trouveront des solutions de façon échelonnée, en fonction des moyens dont dispose la Mairie  après étude de chaque cas.  Au représentant du Préfet de rassurer sur la disponibilité  de la préfecture du Mfoundi à accompagner la Commune d’Arrondissement de Yaoundé 1er dans la  résolution des problèmes évoqués, compte tenu du fait que la réforme du fichier du contribuable devient impérative pour les municipalités. Rappelons  que cette session consacrée au Débat  d'Orientation Budgétaire pour l'exercice 2023, intervient juste 10 jours avant la tenue du Conseil municipal que se tiendra à la Mairie de Yaoundé 1er, le 23 décembre prochain. ",
    },
  ];
  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="row">
            <div className="col-12">
              <h3>News & Events</h3>
            </div>

            {datas.map((data, index) => {
              return <Event key={index} event={data} />;
            })}

            <br />
            <br />
          </div>
        </div>
        <div className="col-3">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />

          <div className="row  rounded p-1 my-border-green">
            <div className="col">10 Juin</div>
            <div className="col">Voir BB de Nathalie</div>
            <div className="col">
              <Tag color="#87d068" className="rounded">
                #87d068
              </Tag>
            </div>
          </div>

          <div className="row  rounded p-1 my-border-red mt-2">
            <div className="col">16 Mai</div>
            <div className="col">Anniversaire de Jean</div>
            <div className="col">
              <Tag color="#f50" className="rounded">
                #87d068
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actualite;
