import { Button, Container } from "@mui/material";

function Sync() {
    const syncData = () => {
        alert('Dados sincronizados com sucesso!');
    };
    
    return(
        <Container>
            <h2>Sincronização de Dados</h2>
            <Button variant="contained" color="primary" onClick={syncData}>
                Sincronizar Dados
            </Button>
        </Container>
    );
}

export default Sync;