import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navebar(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexFlow: 1}}>Monitor de Hábitos</Typography>
                <Button color="inherit" component={Link} to="/habits">Hábitos</Button>
                <Button color="inherit" component={Link} to="/progress">Progresso</Button>
                <Button color="inherit" component={Link} to="/notifications">Notificações</Button>
                <Button color="inherit" component={Link} to="/sync">Sincronizar</Button>

                            </Toolbar>
        </AppBar>
    );
}

export default Navebar;