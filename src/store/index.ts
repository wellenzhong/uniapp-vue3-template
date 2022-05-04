import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import user, { UserState } from "./modules/user";
// 创建一个新的 store 实例
export interface RootState {
  user: UserState;
}
export const key: InjectionKey<Store<RootState>> = Symbol()
const debug = process.env.NODE_ENV !== 'production'

const store = createStore<RootState>({
  modules: {
    user,
  },
});
export function useStore () {
    return baseUseStore(key)
  }
export default store
