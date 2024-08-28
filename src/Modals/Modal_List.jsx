import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Modal_List({ addTodo, edit, name, desc, priority, editTodo }) {
    // console.log(edit)
    // debugger
    const [open, setOpen] = useState(false);
    const [Name, setName] = useState(edit ? name : '');
    const [Desc, setDesc] = useState(edit ? desc : '');
    const [Priority, setPriority] = useState(edit ? priority : '');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }
    const handlePriority = (e) => {
        setPriority(e.target.value);
    }

    const handleAdd = (e) => {


        e.preventDefault();
        const obj = { Name, Desc, Priority };
        if (edit) {
            editTodo(obj);
        }
        else {
            addTodo(obj);
        }
        // console.log(obj);

        setName('');
        setDesc('');
        setPriority('');
        handleClose();
    }


    return (
        <>
            <button className='bg-blue-900 border border-black rounded-lg p-1 text-sm text-white' onClick={handleClickOpen}>{edit ? "Edit TODO" : "Add TODO"}</button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle className='bg-blue-800 text-white' sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {edit ? "Edit" : "Add TODO"}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <form onSubmit={handleAdd}>
                    <DialogContent dividers>
                        <input className='border border-gray-300 p-2 w-full rounded-md' required onChange={(e) => { handleName(e) }} value={Name} placeholder='Write TODO' type="text" />
                        <textarea className='w-full border border-gray-300 my-3 h-28 p-1' required onChange={(e) => { handleDesc(e) }} value={Desc} name="" id="" placeholder='Write description here...'></textarea>
                        <InputLabel id="demo-simple-select-label">Select Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => { handlePriority(e) }}
                            value={Priority}
                            required
                        >
                            <MenuItem value={"Critical-Task"}><h1 className='hover:bg-pink-400 hover:text-white w-full p-1 rounded-lg'>Critical-Task</h1></MenuItem>
                            <MenuItem value={"Normal-Task"}><h1 className='hover:bg-yellow-300 hover:text-white w-full p-1 rounded-lg'>Normal-Task</h1></MenuItem>
                            <MenuItem value={"Urgent-Task"}><h1 className='hover:bg-green-600 hover:text-white w-full p-1 rounded-lg'>Urgent-Task</h1></MenuItem>
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type='submit'>
                            {edit ? "Update" : "ADD"}
                        </Button>
                    </DialogActions>
                </form>
            </BootstrapDialog>
        </>
    );
}
