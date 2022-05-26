import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Observable } from 'windowed-observable';

const stateObservable = new Observable('modal-state');
const titleObservable = new Observable('modal-title');

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        stateObservable.subscribe((state: boolean): void => {
            setOpen(state)
            console.log(state)
        });
        titleObservable.subscribe((title: string) => {
            setMessage(title);
        })
    });

    const handleClose = () => {
        stateObservable.publish(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{message}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

