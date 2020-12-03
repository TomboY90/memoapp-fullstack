import React from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';

// Action Func
import { createMemoRequest, deleteMemoRequest } from 'redux/memo/actions';

const Header = ({ user, currentMemo }) => {
  const dispatch = useDispatch();

  const handleAddMemo = () => {
    dispatch(createMemoRequest(user));
  }

  const handleDeleteMemo = () => {
    dispatch(deleteMemoRequest(currentMemo));
  }

  return (
    <Wrapper>
      <h2>memo</h2>

      <ButtonWrapper>
        <span onClick={handleAddMemo}>추가</span> &nbsp;&nbsp;
        <span onClick={handleDeleteMemo}>삭제</span>
      </ButtonWrapper>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentMemo: state.memo.currentMemo,
})

export default connect(mapStateToProps)(Header);

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  top: 0px;
  z-index: 5;

  background-color: #2a59db;
  color: white;
  border-bottom: 1px solid #4266ca;
  box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

  font-size: 2.5rem;
  font-family: 'Baloo', cursive;
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px;

  span {
    font-size: 2rem;
  }
`