import { useEffect } from 'react'
import {  Button, ButtonGroup } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';
import { loadPost, deletePost } from '../redux/actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';

const Home=() =>{
    let dispatch = useAppDispatch();
    const navigate = useNavigate()
    const{users}=useAppSelector(state => state.users)

    useEffect(()=>{
        dispatch(loadPost())
    },[dispatch])

    const removePost=(id:number)=>{
      dispatch(deletePost(id))
    }


    if(Object.keys(users).length ===0 || users.length===0)return null
    return (
     <> 
     <Button  style={{color:"white",background:"green"}} onClick={()=>navigate('/create')}>Create Post</Button>
    <div style={{display:'flex',flexWrap:'wrap'}}>
      {/* <h3>All Post</h3> */}
     { users?.map((post:any)=>
     (<Card sx={{ maxWidth: 250, margin:'1rem',boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 28%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 64%)" }}>
       <CardContent>
        <div>
        <ButtonGroup variant="contained" aria-label="update group">
          <Button onClick={()=>navigate('/edit', {state: {...post}, replace: true})} color="primary">Edit</Button>
          <Button onClick={()=>removePost(post.id)} variant="outlined" color="secondary">Delete</Button>
        </ButtonGroup>
          <h4 style={{color:"blueviolet"}}>{post.title}</h4>
          <div style={{color:"blue"}}>
            {post.body}
          </div>
       
        </div>
        </CardContent>
        </Card>))
        }
      </div>
      </>
    )
  }

export default Home