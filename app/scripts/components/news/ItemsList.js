import React, { PropTypes, Component } from 'react';
import timeago from 'timeago.js';
import Paper from 'material-ui/Paper';
import Grade from 'material-ui/svg-icons/action/grade';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Person from 'material-ui/svg-icons/social/person';
import Time from 'material-ui/svg-icons/action/watch-later';
import domainFromUrl from '../../utils/domainFromUrl';
import { userPage } from '../../utils/hnConf';

const timeagoInstance = new timeago();

const getItems = (items) =>
  items.map((item, index) =>
    <li key={item.id}>
      <Paper zDepth={1} className="Item">
        <div className="Item-rank">
          <span className="Item-rankId">{index + 1}</span>
        </div>
        <div className="Item-post">
          <a href={item.url} className="Item-postHeader" target="_blank">
            <h2 className="Item-postHeaderTitle">{item.title}</h2>
            <span className="Item-postHeaderLink">({domainFromUrl(item.url)})</span>
          </a>
          <div className="Item-postFooter">
            <div className="Item-author">
              <div className="Item-authorIdentity">
                <Person className="Item-authorIcon" />
                <a href={userPage(item.by)} target="_blank">{item.by}</a>&nbsp;
              </div>
            </div>
            <div className="Item-grade">
              <Grade className="Item-gradeIcon" />
              <div className="Item-gradeScore">{item.score}</div>
            </div>
            <div className="Item-comments">
              <ChatBubble className="Item-commentsIcon" />
              <div className="Item-commentsCounter">{item.kids && item.kids.length || 0}</div>
            </div>
            <div className="Item-time">
              <Time className="Item-timeIcon" />
              <div className="Item-timeIndication">{timeagoInstance.format(item.time * 1000)}</div>
            </div>
          </div>
        </div>
      </Paper>
    </li>
  );

const ItemsList = ({ items }) =>
  <ul className="ItemsList">
    {getItems(items)}
  </ul>;

export default ItemsList;
