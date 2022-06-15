/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Observable } from "windowed-observable";
import { TextareaAutosize } from "@mui/material";

const stateObservable = new Observable("modal-state");
const titleObservable = new Observable("modal-title");
interface Category {
  CategoryID: number;
  CategoryName: string;
}
interface Project {
  _id?: string;
  AccountName: string;
  ProjectAccountID: number;
  ProjectID: number;
  ProjectName: string;
  ProjectCategories: Category[];
  ProjectColor: string;
  ProjectStartDate: string;
  ProjectEndDate: string;
  ProjectIsActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
interface Activity {
  _id?: string;
  AccountName: string;
  ActivityDate: string;
  ActivityID: number;
  CategoryName: string;
  Comments: string;
  EmployeeID: number;
  ProjectColor: string;
  ProjectID: number;
  ProjectName: string;
  StepID: number;
  Task: string;
  TypeID: number;
  value: number;
  activeInProject: boolean;
  timestamps?: boolean;
  versionKey?: boolean;
}
export default function FormDialog(props: any) {
  const { projects, postFunction } = props;
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [project, setProject] = React.useState<string>("Delivery");
  const [category, setCategory] = React.useState("Available");
  const [comments, setComments] = React.useState("");
  const [hours, setHours] = React.useState(0);
  const [ticket, setTicket] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [currentProject, setCurrentProject] = React.useState({
    AccountName: "",
    ProjectAccountID: 0,
    ProjectID: 0,
    ProjectName: "",
    ProjectCategories: [],
    ProjectColor: "",
    ProjectStartDate: "",
    ProjectEndDate: "",
    ProjectIsActive: false,
  });
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

  const handleClick = () => {
 
    if (currentProject && category) {
      const newActivity: Activity = {
        AccountName: currentProject.AccountName,
        ActivityDate: date.toUTCString(),
        ActivityID: currentProject.ProjectID,
        CategoryName: category,
        Comments: comments,
        EmployeeID: 0,
        ProjectColor: currentProject.ProjectColor,
        ProjectID: currentProject.ProjectID,
        ProjectName: currentProject.ProjectName,
        StepID: 0,
        Task: ticket,
        TypeID: 0,
        value: hours,
        activeInProject: currentProject.ProjectIsActive,
      };

      postFunction({
        path: "nova-api/activities",
        method: "POST",
        body: newActivity,
      })
        .then((res: any) => console.log(res))

        .catch((err: any) => console.log(err));
    }
  };

  const handleChangeP = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProject(event.target.value);
  };
  const handleChangeC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const changeByProject = () => {
    const filterProject = projects.filter(
      (option: Project) => option.ProjectName === project
    );

    setCurrentProject(filterProject[0]);
  };
  React.useEffect(() => {
    changeByProject();
  }, [project]);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{message}</DialogTitle>
        <DialogContent>
          <DialogContentText>
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
              {projects.map((option: Project) => (
                <option key={option.ProjectID} value={option.ProjectName}>
                  {option.ProjectIsActive ? option.ProjectName : ""}
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
              {currentProject.ProjectCategories.map((category: Category) => (
                <option key={category.CategoryID} value={category.CategoryName}>
                  {category.CategoryName ? category.CategoryName : ""}
                </option>
              ))}
            </TextField>
            <input
              type="date"
              id="start"
              name="trip-start"
              value={date.toUTCString()}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
            <TextField
              id="outlined-number"
              label="Hours"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setHours(parseInt(e.target.value))}
            ></TextField>
            <TextField
              id="filled-helperText"
              label="Ticket"
              helperText="Some important text"
              variant="filled"
              onChange={(e) => setTicket(e.target.value)}
            ></TextField>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="comments"
              style={{ width: 200 }}
              onChange={(e) => setComments(e.target.value)}
            />
          </DialogContentText>
          <Button variant="outlined" onClick={handleClick}>
            Guardar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
