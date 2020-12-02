import React from 'react';
import { WhiteBox } from 'components/WriteMemo';
import { InputSet, SaveButton } from 'components/Shared';
import { connect, useDispatch } from 'react-redux';

const WriteMemo = (props) => {
  return (
    <WhiteBox>
      <InputSet/>
      <SaveButton/>
    </WhiteBox>
  )
}
