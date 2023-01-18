
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {fetchPosts} from './action'
// import axios from 'axios';
import Display from './display';
import './display.css'

function MinAsset(){
    const {posts} = useSelector((state) => ({...state.data}))
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchPosts())
  },[])

  return (
    <div className="App">
      {/* <button onClick = {() => dispatch(fetchPosts())}>FETCH DATA</button> */}

      
      {/* {!loading ? ( 
        posts.map((post) => <h3 key={post.id}>{post.description}</h3>) 
        ) : (
        <h3>Loading...</h3>
        )} */}
        <Display users={posts}/>
    </div>
  );
}
export default MinAsset;