import React, { useState } from "react";
import Event from "./Event.jsx";
import { Calendar, Tag } from "antd";
import mairie from "../assets/images/mairie.jpg";

const Actualite = (props) => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const datas = [
    {
      image: mairie,
      title: "Bienvenu dans la mairie de Y1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit onsectetur adipisicing elit onsectetur adipisicing elit. Consequatur cupiditate est eveniet itaque, mollitia nobis quidem similique unde. Cum, nulla.",
    },
    {
      image: mairie,
      title: "Bienvenu dans la mairie de Y1 onsectetur adipisicing elit v",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate est eveniet itaque, mollitia nobis quidem similique unde. Cum, nulla.",
    },
    {
      image: mairie,
      title:
        "Bienvenu dans la mairie de Y1 onsectetur adipisicing elit vvonsectetur adipisicing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate est eveniet itaque, mollitia nobis quidem similique unde. Cum, nulla.",
    },
    {
      image: mairie,
      title:
        "Bienvenu dans la mairie de Y1 onsectetur adipisicing elitonsectetur adipisicing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate est eveniet itaque, mollitia nobis quidem similique unde. Cum, nulla.",
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
