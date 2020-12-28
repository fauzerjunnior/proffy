import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/44206464?s=460&u=09f9b92c2ed84b2a1d248d687ef0d6c371e1dfa4&v=4"
          alt="Fauzer Junior"
        />
        <div>
          <strong>Fauzer Junior</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
