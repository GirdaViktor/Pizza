import React from 'react';

import ContentBox from "../Components/ContentBox/ContentBox";
import ContentTop from "../Components/Content/ContentTop/ContentTop";
import ContentItems from "../Components/Content/ContentItems/ContentItems";
const HomePage: React.FC = () => {


  return (
    <ContentBox>
      <ContentTop />
      <h2 className="content__title">Все пиццы</h2>
      <ContentItems />
    </ContentBox>
  );
};

export default HomePage;