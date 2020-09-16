import React, { FunctionComponent } from "react";

interface Image {
  alt: string;
  src: string;
  className: string;
}

interface IProps {
  Heading: string;
  Text: string;
  ClassName: string;
  Img?: Image;
  SVG?: any;
}

const Section: FunctionComponent<IProps> = (props) => {
  const renderImg = () => {
    if (props.SVG) {
      return <div className="svg">{props.SVG}</div>;
    }
    return (
      <div className="img">
        <img src={`../../../Assets/${props.Img?.src}`} alt={props.Img?.alt} />
      </div>
    );
  };

  return (
    <section className={props.ClassName}>
      <div className="text">
        <h4>{props.Heading}</h4>
        <hr className="underline" />
        <p>{props.Text}</p>
      </div>
      {props.Img || props.SVG ? renderImg() : null}
    </section>
  );
};

export default Section;
