import leMaire from "../assets/images/le-maire.jpg";
const Contact = () => {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>La Direction</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>

          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img src={leMaire} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Le maire</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <img src={leMaire} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <img src={leMaire} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
