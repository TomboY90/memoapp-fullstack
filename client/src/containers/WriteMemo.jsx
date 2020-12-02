import React from 'react';
import { InputPlaceholder, WhiteBox } from 'components/WriteMemo';
import { InputSet, SaveButton } from 'components/Shared';

const WriteMemo = () => {

  return (
    <WhiteBox>
      {/* <InputPlaceholder /> */}
      <InputSet />
      <SaveButton />
    </WhiteBox>
  )
}

export default WriteMemo;