import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Observable } from "windowed-observable";
import { Box, TextareaAutosize } from "@mui/material";

const stateObservable = new Observable("modal-state");
const titleObservable = new Observable("modal-title");

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  React.useEffect(() => {
    stateObservable.subscribe((state: boolean): void => {
      setOpen(state);
    });
    titleObservable.subscribe((title: string) => {
      setMessage(title);
    });
  });

  const handleClose = () => {
    stateObservable.publish(false);
  };

  //----
  const [project, setProject] = React.useState("EUR");
  const [category, setCategory] = React.useState("EUR");

  const handleChangeP = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProject(event.target.value);
  };
  const handleChangeC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const projects = [
    {
      value: "proyecto 1",
    },
    {
      value: "proyecto 2",
    },
  ];
  const categories = [
    {
      value: "categoia 1",
    },
    {
      value: "categoria 2",
    },
  ];

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{message}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-select-currency-native"
                select
                label="Native select"
                value={project}
                onChange={handleChangeP}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
              >
                {projects.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Native select"
                value={category}
                onChange={handleChangeC}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
              >
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </Box>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="filled-helperText"
              label="Helper text"
              helperText="Some important text"
              variant="filled"
            />
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 200 }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
