/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { WidgetConfAndInfoProvider } from 'app/pages/DashBoardPage/components/WidgetProvider/WidgetConfAndInfoProvider';
import { FC, memo, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { BoardContext } from '../../../../components/BoardProvider/BoardProvider';
import { selectSelectedIds } from '../../slice/selectors';
import BoardSetting from './BoardSetting';
import { WidgetSetting } from './WidgetSetting';

export const SlideSetting: FC<{}> = memo(() => {
  const { boardId } = useContext(BoardContext);
  const selectedIds = useSelector(selectSelectedIds);
  const setType = useMemo(
    () => (selectedIds.length === 1 ? 'widget' : 'board'),
    [selectedIds.length],
  );
  return (
    <Wrapper>
      {setType === 'board' && <BoardSetting />}
      {setType === 'widget' && (
        <WidgetConfAndInfoProvider
          id={selectedIds[0]}
          boardEditing={true}
          boardId={boardId}
        >
          <WidgetSetting />
        </WidgetConfAndInfoProvider>
      )}
    </Wrapper>
  );
});

export default SlideSetting;

const Wrapper = styled.div<{}>`
  display: flex;
  width: 320px;
  min-width: 320px;
  min-height: 0;
  background-color: ${p => p.theme.componentBackground};
  box-shadow: ${p => p.theme.shadowSider};
`;
