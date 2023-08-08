import React from "react";

const PersonaItem = (props) => {
  return (
    <div>
      <hr></hr>
      <p>Nombre: {props.name}</p>
      <p>Edad: {props.age}</p>
      <hr></hr>
    </div>
  );
};

//Lo mismo pero en clase: ...

/* class PersonaItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <hr></hr>
            <p>Nombre: {this.props.name}</p>
            <p>Edad: {this.props.age}</p>
            <hr></hr>
          </div>
        );
    }
} */

export default PersonaItem;
