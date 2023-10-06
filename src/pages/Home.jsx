import Navbar from "../components/Navbar.jsx";
import mairie from "../assets/images/mairie.jpg";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill, BsFillPersonVcardFill } from "react-icons/bs";
import { Calendar, Tag } from "antd";
import Event from "../components/Event.jsx";
const Home = () => {
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
    <div>
      <div className="container mt-5">
        <input
          className="form-control me-2 rounded-pill"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="row mt-2 mx-2">
          <div className="col border rounded p-4 c-green">test</div>
          <div className="col border rounded p-4 mx-2 c-red">test</div>
          <div className="col border rounded p-4 c-green">test</div>
        </div>

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
              <div className="col">16</div>
              <div className="col">Test de test</div>
              <div className="col">
                <Tag color="#87d068" className="rounded">
                  #87d068
                </Tag>
              </div>
            </div>

            <div className="row  rounded p-1 my-border-red mt-2">
              <div className="col">16</div>
              <div className="col">Test de test</div>
              <div className="col">
                <Tag color="#f50" className="rounded">
                  #87d068
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
