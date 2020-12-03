import React from 'react';
import styled from 'styled-components';

const ListItem = (props) => {
  const { active, title, contents, onClick } = props;

  return (
    <Container className={active ? "active" : ""} onClick={onClick}>
      <div className="title">{title ? title : '제목'}</div>
      <div className="list-item-contents">{contents ? contents : '내용'}</div>
    </Container>
  )
}

export default ListItem;

const Container = styled.div`
  padding: 20px 30px;
  cursor: pointer;

  &::hover {
    background-color: #f5f5f5;
  }

  &.active {
    background-color: #EEF3F8;
  }

  .title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .list-item-contents {
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`