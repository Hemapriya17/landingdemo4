import React from "react";

export const Services = (props) => {
  return (
    <div id="blogs" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Blogs</h2>
          <p>
          Welcome to Twinmo, the AI-powered experimentation platform
revolutionizing product development
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
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
