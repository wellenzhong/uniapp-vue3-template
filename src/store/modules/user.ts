// user 的store
import { Module, MutationTree, ActionTree } from "vuex";
import { RootState } from "../index";
export interface UserState {
  user: IUser;
}
export interface IUser {
  id: string;
  name: string;
}
const user: Module<UserState, RootState> = {
  state: {
    user: {
      id: "123",
      name: "wellen",
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
};

export default user;
