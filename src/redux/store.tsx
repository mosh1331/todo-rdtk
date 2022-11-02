import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo.js'


// export default configureStore({
//     reducer:{
//         todoList:todoReducer
//     }
// })

export const store = configureStore({
    reducer: {
        todoList:todoReducer
    },
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch