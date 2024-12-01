import { useRef, useState } from "react";
import { AppDrawer, Form, Header, Item } from "./components";
import { Container } from "@mui/material";
import { useApp } from "./AppProvider";
import { Outlet } from "react-router";

export default function App() {
  const {showForm} = useApp();
  const [posts, setPosts] = useState([
    {id: 3, content: "Some Content", user: "Alice"},
    {id: 2, content: "More Content", user: "John"},
    {id: 1, content: "Another Content", user: "Bob"},
  ]);

  const add = (content) => {
    const id = posts[0].id +  1;
    setPosts([ {id, content, user: "Alice"}, ...posts ])
   }

  const remove = (id) => {
    setPosts(posts.filter(post => post.id != id))
  }
  
  return (
  <div>
    <Header/>
    <AppDrawer/>
    <Container sx={{ mt: 4 }} maxWidth="md">
      {/* {showForm && <Form add={add}/>}
      {
        posts.map(post => (
          <Item key={post.id} post={post} remove={remove}/>
        ))
      } */}

      <Outlet/>
    </Container>
  </div>
)
}