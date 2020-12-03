import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';

// Action Type
import { SELECT_CURRENT_MEMO, DESELECT_CURRENT_MEMO, CHANGE_MEMO_CONTENT, CHANGE_MEMO_TITLE } from 'redux/memo/types';

// Action Func
import { getMemoListRequest, updateMemoRequest  } from 'redux/memo/actions';

// components
import List from 'components/List';
import Note from 'components/Note';

const Memo = ({ memoList, currentMemo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemoListRequest());
  }, [])

  const handleListItemClick = id => {
    const selectedMemo = memoList.find(memo => memo.id === id)

    // 이미 선택된 메모는 선택 해제
    if (currentMemo && currentMemo.id === selectedMemo.id) {
      dispatch({
        type: DESELECT_CURRENT_MEMO
      })
    }
    else {
      dispatch({
        type: SELECT_CURRENT_MEMO,
        payload: { memo: selectedMemo }
      })
    }
  }

  const handleEditNote = (name, val) => {
    name === 'title' 
    ?
    dispatch({
      type: CHANGE_MEMO_TITLE,
      payload: { title: val }
    })
    :
    dispatch({
      type: CHANGE_MEMO_CONTENT,
      payload: { content: val }
    })
  }

  const handleSaveNote = () => {
    dispatch(updateMemoRequest(currentMemo))
  }

  return (
    <Container>
      <List
        notes={memoList}
        activeId={currentMemo?.id}
        onListItemClick={handleListItemClick}
      />
      {
        memoList.length > 0 && currentMemo &&
        <>
          <Note
            note={currentMemo} 
            onEditNote={handleEditNote}
          />
          <ButtonWrapper>
            <button className="save-btn" onClick={handleSaveNote}>
              저장
            </button>
          </ButtonWrapper>
        </>
      }
    </Container>
  )
}

const mapStateToProps = state => ({
  memoList: state.memo.memoList,
  currentMemo: state.memo.currentMemo
})

export default connect(mapStateToProps)(Memo);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const ButtonWrapper = styled.div`
  width: 5%;
  height: 50px;
  position: absolute;
  bottom: 30px;
  right: 30px;

  .save-btn {
    width: 100%;
    height: 100%;
    background: #2a59db;
    color: white;
    border: none;
    font-family: 'Baloo',cursive;
    font-size: 2rem;
  }
`