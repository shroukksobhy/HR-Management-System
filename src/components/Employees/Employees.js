import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container, Box } from '@mui/material';
import AddEmployee from './AddEmployee';
// import EditItem from './EditItem';

const Employees = () => {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/employees');
        setItems(response.data);
    };

    // const handleDelete = async (id) => {
    //     await axios.delete(`/api/items/${id}`);
    //     fetchItems();
    // };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box mb={2}>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => setEditingItem(item)}>Edit</Button>
                                        {/* <Button onClick={() => handleDelete(item.id)}>Delete</Button> */}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <AddEmployee />
                    {/* <AddEmployee fetchItems={fetchItems} /> */}

                    {/* {editingItem && <EditItem item={editingItem} fetchItems={fetchItems} setEditingItem={setEditingItem} />} */}
                </TableContainer>
            </Box>
        </Container>
    );
};

export default Employees;
