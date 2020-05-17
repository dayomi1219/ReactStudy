import React from "react";
import * as OnLiveList from "./components/organisms/onLive/OnLiveList";
import * as CategoryList from "./components/organisms/category/CategoryList";
import * as SupportTrain from "./components/organisms/supportTrain/SupportTrain";
import * as Recommended1 from "./components/organisms/recommended/Recommended_1";
import * as Recommended2 from "./components/organisms/recommended/Recommended_2";
import * as Recommended3 from "./components/organisms/recommended/Recommended_3";
import * as Header from "./components/organisms/header/Header";
import * as Carousel from "./components/organisms/header/Carousel";
import "./App.scss";

/**
 * Page 대체
 * templates은 생략
 */

function App() {
  return (
    <div className="App">
      <Header.Header />
      <Carousel.Carousel />
      <OnLiveList.OnLiveList />
      <CategoryList.CategoryList />
      <SupportTrain.SupportTrain />
      <Recommended1.Recommended1 />
      <Recommended2.Recommended2 />
      <Recommended3.Recommended3 />
    </div>
  );
}

export default App;
