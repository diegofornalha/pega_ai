import React from 'react';
import styles from '../styles/ListaComponent.module.css';

const ListaComponent = (props) => {
    return (
        <div className={styles.container}>
            <iframe 
                src="https://float.diegofornalha.repl.co/" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                title="Formulário Embedado"
            ></iframe>
        </div>
    );
}

export default ListaComponent;
