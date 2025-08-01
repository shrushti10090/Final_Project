import React from "react";
import Navbar from "./Navbar";
import PostList from "./PostList";



const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <Navbar />
      <PostList/>
     
     
      <hr />
      
    </div>
  );
};

export default App;
