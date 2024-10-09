'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../app/i18n'; // Importa i18n desde tu archivo de configuración

const TestPage = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Ahora i18n está definido
  };

  return (
    <div>
      <h1>{t('welcomeMessage')}</h1> {/* Texto traducido */}
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
        {/* Agrega más botones para otros idiomas si es necesario */}
      </div>
    </div>
  );
};

export default TestPage;
