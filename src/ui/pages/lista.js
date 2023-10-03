import React from 'react';
import ListaComponent from '../components/ListaComponent.js';

export default function Lista(props) {
  return (
    <>
      <div className="container mx-auto max-w-[920px] px-6 sm:px-8 md:px-12">
        <ListaComponent user={props.user} auth={props.auth}/>
      </div>
    </>
  );
}
