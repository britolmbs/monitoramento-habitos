import { Button, Container, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useState } from "react";

function Habits () {
    const [habits, setHabits] = useState([]);
    const[newHabit, setNewHabit] = useState('');

    const addHabit = () => {
        setHabits([...habits, newHabit]);
        setNewHabit('');
    };
    return(
        <Container>
            <h2>Criação e Acompanhamento de Hábitos</h2>
            <TextField
            label="Novo Hábito"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)} />
            <Button variant="contained" color="primary" onClick={addHabit}>
                Adicionar Hábito
            </Button>
            <List>
                {habits.map((habit, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={habit} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default Habits;