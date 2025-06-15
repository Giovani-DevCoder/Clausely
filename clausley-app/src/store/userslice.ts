import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: any | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<any>) => {
            state.user = action.payload
            console.log("userDetails",action.payload)
        }
    },
})

export const { setUserDetails } = userSlice.actions

export default userSlice.reducer
