/** Displays a List of all the characters in our store 
 *      + a url to link to that specific character */

import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

function PersonList() {
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;