import mairie from "../assets/images/mairie.jpg";
import { Modal } from "antd";
import { useState } from "react";

const Event = (props) => {
  const { event } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col-3">
          <img src={mairie} alt="" height={100} width={"100%"} />
        </div>
        <div className="col">
          {event.title}.
          <button className="btn btn-success mx-1" onClick={showModal}>
            Voir plus
          </button>
        </div>
      </div>

      <Modal
        title="Informations"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {event.description}
      </Modal>
    </>
  );
};

export default Event;
