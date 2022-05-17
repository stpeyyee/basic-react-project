import React from 'react'
import { TableContainer, Table, TableRow, TableHead, TableBody, TableCell, Grid, TextField, Button } from '@mui/material'
import { style } from '../../styles/style'
const useStyles = style

export default function DataTable({data, onUpdate, onDelete, onChecked}){
    const classes = useStyles()
    return(
        <Grid container lg={12}>
            <Grid item lg={12} align="center">
                Show Table
            </Grid>
            <Grid item lg={12}>
                <TableContainer>
                    <Table size="small" stickyHeader style={{border: '1px solid gray'}}>
                        <TableHead>
                            <TableRow key={"header"}>
                                <TableCell>
                                    Checked
                                </TableCell>
                                <TableCell>
                                    First Name
                                </TableCell>
                                <TableCell>
                                    Last Name
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell>
                                    Delete
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {data.length > 0 &&
                        <TableBody>
                            {data.map((obj) => {
                                return(
                                <TableRow key={obj.id}>
                                    <TableCell>
                                    <Checkbox
                                        checked={obj.checked}
                                        onChange={()=>onChecked(obj.id)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    </TableCell>
                                    <TableCell>
                                        {obj.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {obj.lastName}
                                    </TableCell>
                                    <TableCell>
                                        <TextField value={obj.email} onChange={(e)=>onUpdate(obj.id, e.target.value)}></TextField>
                                        {/* {obj.email} */}
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={()=>onDelete(obj.id)} className={classes.roundButton}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                                )
                            })}
                        </TableBody>
                        }
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>

    )
}