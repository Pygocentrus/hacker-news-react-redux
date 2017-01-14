import React, { PropTypes, Component } from 'react';
import domainFromUrl from '../../utils/domainFromUrl';
import { userPage } from '../../utils/hnConf';

const getItems = (items) =>
  items.map((item, index) =>
    <li key={item.id} className="Item">
      <div className="Item-rank">
        <span className="Item-id">{index + 1}</span>
      </div>
      <div className="Item-post">
        <a href={item.url} className="Item-postHeader" target="_blank">
          <h2 className="Item-postHeaderTitle">{item.title}</h2>
          <span className="Item-postHeaderLink">({domainFromUrl(item.url)})</span>
        </a>
        <div className="Item-postFooter">
          {item.score} points by&nbsp;
          <a href={userPage(item.by)} target="_blank">{item.by}</a>&nbsp;
          | {item.kids && item.kids.length} comments
        </div>
      </div>
    </li>
  );

const ItemsList = ({ items }) =>
  <ul className="ItemsList">
    {getItems(items)}
  </ul>;

export default ItemsList;
