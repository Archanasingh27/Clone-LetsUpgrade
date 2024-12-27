import React from 'react';
import Header from './Header';
import NotificationBar from './NotificationBar';
import MainContent from './MainContent';
import CertificatePage from './CertificatePage';
import ThirdPage from './ThirdPage';

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <NotificationBar />
      <MainContent />

      {/* Certificate Page and Third Page stacked vertically */}
      <div className="mt-8">
        <CertificatePage />
      </div>
      <div className="mt-8">
        <ThirdPage />
      </div>
    </div>
  );
};

export default MainPage;
