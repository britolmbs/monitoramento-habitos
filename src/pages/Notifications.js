import { Button, Container } from "@mui/material";

function Notifications() {
    const sendNotification = () => {
        if(Notification.permission === 'granted'){
            new Notification('Lembrete de Hábito',{
                body: 'Não se esqueça de registrar seu hábito diário!',
            });
        }else if (Notification.permission !== 'denied'){
           Notification.requestPermission().then(permission => {
            if(permission === 'granted'){
                new Notification('Lembrete de Hábito',{
                    body: 'Não se esqueça de registrar seu hábito diario!',
                });
            }
           }) ;
        }
    } ;

    return (
        <Container>
            <h2>Notificação de Lembrete</h2>
            <Button variant="contained" color="primary" onClick={sendNotification}>
                Enviar Notificação
            </Button>
        </Container>
    );
}

export default Notifications;