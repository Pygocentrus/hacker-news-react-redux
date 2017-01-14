import React, { PropTypes, Component } from 'react';
import domainFromUrl from '../../utils/domainFromUrl';
import { userPage } from '../../utils/hnConf';

const getItems = (items) =>
  items.map((item, index) =>
    <li key={item.id} className="Story">
      <div className="Story-rank">
        <span className="Story-id">{index + 1}</span>
      </div>
      <div className="Story-post">
        <a href={item.url} className="Story-postHeader">
          <h2 className="Story-postHeaderTitle">{item.title}</h2>
          <span className="Story-postHeaderLink">({domainFromUrl(item.url)})</span>
        </a>
        <div className="Story-postFooter">
          {item.score} points by&nbsp;
          <a href={userPage(item.by)} target="_blank">{item.by}</a>&nbsp;
          | {item.kids && item.kids.length} comments
        </div>
      </div>
    </li>
  );

const ItemsList = ({ items }) =>
  <ul>{getItems(items)}</ul>;

export default ItemsList;
