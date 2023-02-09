import { faq } from "/public/data/aboutUs";

function Business() {
  return (
    <>
      <div className="gap d-block d-md-none"></div>
      <section className="business">
        <div className="gap"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="business_left">
                <h2 className="heading_2">{faq.title}</h2>
                <p>{faq.details}</p>
              </div>
              <div className="gap d-block d-md-none"></div>
            </div>
            <div className="col-12 col-md-5">
              {faq.questions.map((item) => (
                <div key={item.id} className="accordion" id={`accordionExample${item.id}`}>
                  <div className="accordion-item">
                    <h4 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${
                          item.id == 1 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.question}
                      </button>
                    </h4>
                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${
                        item.id == 1 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent={`accordionExample${item.id}`}
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Business;
