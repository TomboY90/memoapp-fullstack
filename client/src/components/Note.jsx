import React from 'react';
import styled from 'styled-components';

const Note = (props) => {
  const { note, onEditNote } = props;
  const { title, contents } = note;

  return (
    <NoteWrapper>
      <input
        className="title"
        value={title}
        onChange={() => console.log('note input change')}
      />
      <textarea
        className="note-contents"
        value={contents}
        onChange={() => console.log('note contents change')}
      />
    </NoteWrapper>
  )
}

export default Note;

const NoteWrapper = styled.div`
  width: 100%;
  padding: 40px 70px 0px 70px;

  .title {
    display: block;
    font-size: 24px;
    font-weight: 800;
    font-family: inherit;
    border: 0px;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    width: 100%;
    outline: none;
  }

  .note-contents {
    display: block;
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
    border: 0px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100% - 60px);
    outline: none;
    resize: none;
  }
`