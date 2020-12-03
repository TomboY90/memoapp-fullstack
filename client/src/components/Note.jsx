import React from 'react';
import styled from 'styled-components';

const Note = (props) => {
  const { note, onEditNote } = props;
  const { title, content } = note;

  return (
    <NoteWrapper>
      <input
        className="title"
        name="title"
        value={title}
        onChange={(e) => onEditNote(e.target.name, e.target.value)}
      />
      <textarea
        className="note-contents"
        name="content"
        value={content}
        onChange={(e) => onEditNote(e.target.name, e.target.value)}
      />
    </NoteWrapper>
  )
}

export default Note;

const NoteWrapper = styled.div`
  width: 100%;
  height: 100%;

  .title {
    display: block;
    font-size: 24px;
    font-weight: 800;
    font-family: inherit;
    border: 0px;
    margin: 0;
    padding: 27px;
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
    padding: 0 27px;
    width: 97%;
    height: calc(100% - 60px);
    outline: none;
    resize: none;
  }
`