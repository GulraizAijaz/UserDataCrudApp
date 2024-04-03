import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Fields = ({name,email,index}) => {
  return (
    <div className='stored-data-values'>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>
        <Button style={{padding:"20px 40px"}} variant="outlined" color="error">
        <DeleteIcon/>
        </Button>
        </h3>
    </div>
  )
}

export default Fields;