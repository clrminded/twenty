import { RecordTableComponentInstanceContext } from '@/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentStateV2 } from '@/ui/utilities/state/component-state/utils/createComponentStateV2';

export const tableEncounteredUnrecoverableErrorComponentState =
  createComponentStateV2<boolean>({
    key: 'tableEncounteredUnrecoverableErrorComponentState',
    defaultValue: false,
    componentInstanceContext: RecordTableComponentInstanceContext,
  });
