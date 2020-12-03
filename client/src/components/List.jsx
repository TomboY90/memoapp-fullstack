import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

const List = (props) => {
  const { notes, activeId, onListItemClick } = props;

  return (
    <ListWrapper>
      {notes.map(note => {
        const { id, title, content } = note;

        return (
          <ListItem
            key={id}
            id={id}
            active={id === activeId}
            title={title}
            contents={content}
            onClick={() => onListItemClick(id)}
          />
        );
      })}
    </ListWrapper>
  )
}

export default List;

const ListWrapper = styled.div`
  min-width: 360px;
  width: 360px;
  height: 100%;
  border-right: 1px solid #eee;
  background-color: white;
`