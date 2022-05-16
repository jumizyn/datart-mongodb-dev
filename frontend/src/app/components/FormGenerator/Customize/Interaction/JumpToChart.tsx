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

import { Button, Select, Space } from 'antd';
import { FC, memo } from 'react';
import { InteractionFieldRelation } from '../../constants';
import { I18nTransator, JumpToChartRule } from './types';

const JumpToChart: FC<
  {
    value?: JumpToChartRule;
    onValueChange: (value) => void;
  } & I18nTransator
> = memo(({ value, onValueChange, translate: t }) => {
  return (
    <Space>
      <Select
        placeholder={t('drillThrough.rule.reference.title')}
        onChange={view => onValueChange({ ...value, ...{ view } })}
      >
        <Select.Option value="table-1">Table A</Select.Option>
        <Select.Option value="table-2">Table B</Select.Option>
      </Select>
      <Select
        placeholder={t('drillThrough.rule.relation.title')}
        onChange={relation => onValueChange({ ...value, ...{ relation } })}
      >
        <Select.Option value={InteractionFieldRelation.Auto}>
          {t('drillThrough.rule.relation.auto')}
        </Select.Option>
        <Select.Option value={InteractionFieldRelation.Customize}>
          {t('drillThrough.rule.relation.customize')}
        </Select.Option>
      </Select>
      <Button type="link">{t('drillThrough.rule.relation.setting')}</Button>
    </Space>
  );
});

export default JumpToChart;
