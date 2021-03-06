/** Displays a List of all the planets in our store
 *      + a url to link to that specific planet */
import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'

function PlanetList() {
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;