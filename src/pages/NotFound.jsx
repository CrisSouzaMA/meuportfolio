import React from 'react';
import notfound from '../assets/images/notfound.jpeg';

export default class NotFound extends React.Component{
  render(){
    return(
      <img 
      src={notfound}
      alt='notfound' 
      width='100%'
      />
    );
  }
}