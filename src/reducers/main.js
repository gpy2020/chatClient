const initialState = { testText: "Hello React!" };

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
