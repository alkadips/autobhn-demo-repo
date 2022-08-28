import { Button, Input, InputLabel } from '@material-ui/core'
import { useAppDispatch } from '../hooks'
import { createPost } from '../redux/actions'
import { FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

 function CreatePost() {
const navigate = useNavigate()
let dispatch = useAppDispatch();
const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => {
    dispatch(createPost(data))
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
            <Button type='submit'>Create</Button>
        </form>
    </div>
    </>
  )
}

export default CreatePost