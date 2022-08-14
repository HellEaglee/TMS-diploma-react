import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type InitialStateType = {
  email: string;
  token: string;
  id: string;
};

const initialState: InitialStateType = {
  email: "",
  token: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: any, action: any) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state: any) => {
      state.email = "";
      state.token = "";
      state.id = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

const reducer = userSlice.reducer;

export default reducer;

export const UserSelectors = {
    getUser: (state: RootState) => state.user,
};
