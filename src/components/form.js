import React from 'react';

const Form = props => (
    <form onSubmit={props.weatherMethod}>
    <input className="infoWeath" type="text" name="city" placeholder="City"/>
    <button>Get weather</button>
    </form>
);

export default Form;