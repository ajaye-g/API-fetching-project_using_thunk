import React from "react";
// import { useSelector,useDispatch } from "react-redux";
// import {fetchPosts} from "./redux/action"
import MinAsset from './redux/minasset'
import './App.css';

function App() {
  return(
    <div className="App">
     <MinAsset/>
    </div>
  )
  // const {posts,loading} = useSelector((state) => ({...state.data}))
  
  // const dispatch = useDispatch();
  // return (
  //   <div className="App">
  //     <button onClick = {() => dispatch(fetchPosts())}>Fetch Post</button>
  //     {!loading ? ( 
  //       posts.map((post) => <h3 key={post.id}>{post.description}</h3>) 
  //       ) : (
  //       <h3>Loading...</h3>
  //       )}
  //   </div>
  // );
}

export default App;
