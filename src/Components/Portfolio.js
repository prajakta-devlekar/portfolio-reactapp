import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="rows portfolio-item ">
          <a className="item-wrap" href={projects.url}>
            <img alt={projects.title} src={projectImage} style={{ width:'600px'}}/>
            <h4 style={{ textAlign: "center"}}>{projects.title}</h4>
          </a>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          
            <div className=" collapsed rows">
              <h1>Check Out Some of My Works.</h1>
              <div
                id="portfolio-wrapper"
                className=" six bgrid-quarters s-bgrid-thirds text-center m-auto">
                {projects}
              </div>
            </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
