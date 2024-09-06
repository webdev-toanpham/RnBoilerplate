import {create} from 'zustand';

export interface ICommonState {
  screenLocking: number;
}

export interface ICommonAction {
  lockScreen: (isLock: boolean) => void;
}

const useCommonStore = create<ICommonState & ICommonAction>(set => ({
  screenLocking: 0,
  lockScreen: (isLock: boolean) => {
    set(state => ({
      screenLocking: isLock ? state.screenLocking + 1 : state.screenLocking - 1,
    }));
  },
}));

export default useCommonStore;
