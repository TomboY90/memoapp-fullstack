import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';

const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1.25rem;
`;

const StyledTextArea = styled(Textarea)`
  width: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: 1rem;
  resize: none;
`

const InputSet = (props) => {
  const { title, body, onChange } = props;
  const _title = useRef();

  useEffect(() => {
    _title.current.focus();
  }, [])

  return (
    <div>
      <TitleInput 
        name="title" 
        placeholder="제목" 
        value={title}
        ref={_title}
        onChange={onChange}
      />
      <StyledTextArea
        minRows={3}
        maxRows={20}
        placeholder="메모를 입력하세요..."
        name="body"
        onChange={onChange}
        value={body}
      />
    </div>
  )
}

InputSet.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onChange: PropTypes.func
}

export default InputSet;