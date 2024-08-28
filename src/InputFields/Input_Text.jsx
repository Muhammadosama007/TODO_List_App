import React from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Modal_List from '../Modals/Modal_List';

function Input_Text() {
  return (
    <>
    <div className='relative my-7 mx-7'>
     <InputBase
        sx={{ ml: 1, flex: 1 }}
        className=' w-1/4 p-1 border border-gray-300 rounded-lg'
        placeholder="Search TODO"
      />
      <div className='absolute top-0 right-3/4'>
      <IconButton type="button" sx={{ p: '10px'}} aria-label="search">
        <SearchIcon />
      </IconButton>
      </div>
      {/* <span className='m-3'><Modal_List/></span> */}
      </div>
    </>

  )
}

export default Input_Text