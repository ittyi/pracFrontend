import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      // Redux Toolkit を使用すると、リデューサーで「変更」ロジックを作成できます。
      // Immer ライブラリを使用するため、実際には状態を変更しません。
      // これは「ドラフト状態」への変更を検出し、まったく新しい状態を生成します。
      // これらの変更に基づく不変状態。
      // また、これらの関数からは return ステートメントは必要ありません。
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// アクションクリエーターはケースリデューサー関数ごとに生成されます
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
