import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

// components
import List from 'components/List';
import Note from 'components/Note';

const Memo = ({ memoList, currentMemo }) => {

  const handleListItemClick = idx => {
    // action 함수 불러서 api 통신 후 currentMemo 에 클릭한 메모 저장
  }

  const handleEditNote = () => {

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
        <Note
          note={currentMemo} 
          onEditNote={handleEditNote}
        /> 
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
  height: calc(100vh - 60px);
`