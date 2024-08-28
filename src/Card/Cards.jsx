import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal_List from '../Modals/Modal_List';

function Cards({ name, desc, priority, Delete, editTodo }) {
    // const [edit, setEdit] = useState(true);

    const style = {
        'Critical-Task': {
            bg: 'bg-pink-500',
            textColor: 'text-pink-500'
        },
        'Normal-Task': {
            bg: 'bg-yellow-200',
            textColor: 'text-yellow-300'
        },
        'Urgent-Task': {
            bg: 'bg-green-200',
            textColor: 'text-green-700'
        }
    }
    const { bg, textColor } = style[priority];

    return (
        <>
            <div className='ml-12'>
                <div className='ml-12'>
                    {/* {priority == 'Critical-Task' && ( */}
                    <div className='ml-12 relative'>
                        <h1 className={`text-xl ${textColor}`}>{priority}</h1>
                        <Card className='w-60' sx={{ maxWidth: 345 }}>
                            <CardContent className={`h-48 ${bg}`}>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h1>{name}</h1>
                                </Typography>
                                <Typography className='w-44' variant="body2" color="text.secondary">
                                    <p>{desc}</p>
                                </Typography>
                                <Typography className='w-44 pt-9' variant="body2" color="text.secondary">
                                    <p>Priority: {priority}</p>
                                </Typography>
                            </CardContent>
                        </Card>
                        <div className='absolute bottom-2 right-1/4'>
                            {/* <button>Edit</button> */}
                            <Modal_List edit={true} name={name} desc={desc} priority={priority} editTodo={editTodo} />

                        </div>
                        <div className='absolute bottom-2 right-1'>
                            <button onClick={Delete}>Delete</button>
                        </div>

                    </div>

                </div>








                {/* )} */}
                {/* <div>
                    {priority === 'Normal-Task' && (
                        <div className='ml-12 relative'>
                            <h1 className='text-xl text-yellow-300'>Normal-Task</h1>
                            <Card className='w-60' sx={{ maxWidth: 345 }}>
                                <CardContent className='bg-yellow-200 h-48'>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <h1>{name}</h1>
                                    </Typography>
                                    <Typography className='w-44' variant="body2" color="text.secondary">
                                        <p>{desc}</p>
                                    </Typography>
                                    <Typography className='w-44 pt-9' variant="body2" color="text.secondary">
                                        <p>Priority: {priority}</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <div className='absolute bottom-2 right-1/4'>
                                <Modal_List edit={edit} name={name} desc={desc} priority={priority} />
                                {/* <button>Edit</button> */}
                {/* </div>
                            <div className='absolute bottom-2 right-1'>
                                <button>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {priority === 'Urgent-Task' && (
                        <div className='ml-12 relative'>
                            <h1 className='text-xl text-green-700'>Urgent-Task</h1>
                            <Card className='w-60' sx={{ maxWidth: 345 }}>
                                <CardContent className='bg-green-200 h-48'>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <h1>{name}</h1>
                                    </Typography>
                                    <Typography className='w-44' variant="body2" color="text.secondary">
                                        <p>{desc}</p>
                                    </Typography>
                                    <Typography className='w-44 pt-9' variant="body2" color="text.secondary">
                                        <h3>Priority: {priority}</h3>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <div className='absolute bottom-2 right-1/4'>
                                {/* <button>Edit</button> */}
                {/* <Modal_List edit={edit} name={name} desc={desc} priority={priority} />

                            </div>
                            <div className='absolute bottom-2 right-1'>
                                <button>Delete</button>
                            </div>
                        </div>
                    )}
                </div> */}
            </div>
        </>
    )
}

export default Cards