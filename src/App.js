import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {fetchPosts} from "./redux/action"
import './App.css';

function App() {
  const {posts,loading} = useSelector((state) => ({...state.data}))
  
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>  hello </h1>
      <button onClick = {() => dispatch(fetchPosts())}>Fetch Post</button>
      {!loading ? ( 
        posts.map((post) => <h3 key={post.id}>{post.description}</h3>) 
        ) : (
        <h3>Loading...</h3>
        )}
    </div>
  );
}

export default App;
