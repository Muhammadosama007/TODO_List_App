import React, { useState } from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Modal_List from '../Modals/Modal_List';
import Cards from '../Card/Cards';

function Home() {
    const [arr, setArr] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    const Critical=arr.filter((i)=>i.Priority==='Critical-Task')
    const Normal=arr.filter((i)=>i.Priority==='Normal-Task')
    const Urgent=arr.filter((i)=>i.Priority==='Urgent-Task')



    const addTodo = (newTodo) => {
        if (editTodo !== null) {
            const updatedArr = arr.map((item, ind) => ind === editTodo ? newTodo : item);
            setArr(updatedArr);
            setEditTodo(null);

        }
        else {
            setArr([...arr, newTodo]);
        }
    }
    console.log(arr);

    const onDelete = (delIndex) => {
        const del = arr.filter((_, arrIndex) => arrIndex !== delIndex);
        setArr(del);
    }

    const handleEdit = (e) => {
        setEditTodo(e);
    }

    return (
        <>
            <div className='relative my-7 mx-7'>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    className=' w-1/4 p-1 border border-gray-300 rounded-lg'
                    placeholder="Search TODO"
                />
                <div className='absolute top-0 right-3/4'>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
                <span className='m-3'><Modal_List addTodo={addTodo} edit={false} /></span>
            </div>

            <section className='flex flex-wrap gap-3'>
                <div>
                    {Critical.map((v, i) => (
                        <div>
                            <Cards name={v.Name} desc={v.Desc} priority={v.Priority} Delete={() => { onDelete(i) }} editTodo={() => { handleEdit(i) }} />
                        </div>
                    ))}
                </div>
                <div>
                <div>
                    {Normal.map((v, i) => (
                        <div>
                            <Cards name={v.Name} desc={v.Desc} priority={v.Priority} Delete={() => { onDelete(i) }} editTodo={() => { handleEdit(i) }} />
                        </div>
                    ))}
                </div>
                </div>
                <div>
                <div>
                    {Urgent.map((v, i) => (
                        <div>
                            <Cards name={v.Name} desc={v.Desc} priority={v.Priority} Delete={() => { onDelete(i) }} editTodo={() => { handleEdit(i) }} />
                        </div>
                    ))}
                </div>
                </div>
            </section>

            {/* <section className='flex flex-wrap gap-3'>
                {arr.map((v, i) => (
                    <div key={i}>
                        <Cards name={v.Name} desc={v.Desc} priority={v.Priority} Delete={() => { onDelete(i) }} editTodo={() => { handleEdit(i) }} />
                    </div>
                ))}
            </section> */}
            {/* <span className='m-3'><Modal_List addTodo={addTodo} /></span> */}
        </>
    )
}

export default Home