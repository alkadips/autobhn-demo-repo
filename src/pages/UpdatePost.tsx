
import { Button, Input, InputLabel } from '@material-ui/core'
import React from 'react'
import { useAppDispatch } from '../hooks'
import {updatePost } from '../redux/actions'
import { FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
interface IPost{id?:number,body?:string,userId?:number,title?:string}
export default function UpdatePost() {
const navigate = useNavigate()
const location = useLocation();
let dispatch = useAppDispatch();
    const {title,body,userId,id}= location.state as IPost
const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      id, 
      title,
      body,
      userId
    }
  });
  const onSubmit = (data: any) => {
    dispatch(updatePost(data.id,data))
  }
  return (
    <>
    <Button onClick={()=>navigate("/",{ replace: true })}>Home</Button>
    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input id="my-input"{...register('title')} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Body</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" {...register('body', { required: true })} />
            </FormControl>
            <Button type='submit'>Update</Button>
        </form>
    </div>
    </>
  )
}



