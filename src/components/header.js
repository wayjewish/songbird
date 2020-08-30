import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <div className="header-top row">
        <div className="logo col-xs-6">Music games</div>
        <div className="score-wrap col-xs-6">Баллы: {props.score}</div>
      </div>
      <div className="header-bot">
        <List list={props.list} />
      </div>
    </div>
  );
}

function List(props) {
  const listItems = props.list.map((item) =>
    <ListItem 
      key={item.id} 
      text={item.text} 
      isActive={item.isActive} />
  );
  return (
    <ul className="pagination">
      {listItems}
    </ul>
  );
}

function ListItem(props) {
  const classes = `pagination__item${props.isActive ? ' active' : ''}`;
  return <li className={classes}>{props.text}</li>;
}

export default Header;