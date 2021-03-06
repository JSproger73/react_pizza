import React from 'react';
import { Catigories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Catigories
          onClick={(name) => console.log(name)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
