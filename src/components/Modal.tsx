/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Observable } from 'windowed-observable';
import { TextareaAutosize, Box } from '@mui/material';
import { Activity, Project, Category } from '../interfaces/interfaces';

const stateObservable = new Observable('modal-state');
const titleObservable = new Observable('modal-title');
const apiObservable = new Observable('api-observable');

export default function FormDialog(props: any) {
  const { projects, postFunction } = props;
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [project, setProject] = React.useState<string>('Delivery');
  const [category, setCategory] = React.useState('Available');
  const [comments, setComments] = React.useState('');
  const [hours, setHours] = React.useState(0);
  const [ticket, setTicket] = React.useState('');
  const [date, setDate] = React.useState(new Date().toISOString());
  const [currentProject, setCurrentProject] = React.useState<Project>({
    AccountName: '',
    ProjectAccountID: 0,
    ProjectID: 0,
    ProjectName: '',
    ProjectCategories: [],
    ProjectColor: '',
    ProjectStartDate: '',
    ProjectEndDate: '',
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

  React.useEffect(() => {
    changeByProject();
  }, [project]);

  const handleClose = () => {
    stateObservable.publish(false);
  };

  const handleClick = () => {
    if (currentProject && category) {
      const newActivity: Activity = {
        AccountName: currentProject.AccountName,
        ActivityDate: date,
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
      if (
        message === 'Create multiple activities' ||
        message === 'Create activity'
      ) {
        console.log('entro');
        postFunction({
          path: 'nova-api/activities',
          method: 'POST',
          body: newActivity,
        })
          .then((res: any) => {
            console.log(res);
            apiObservable.publish('post');
          })

          .catch((err: any) => console.log(err));
      }
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

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth={1000}>
        <DialogTitle>{message}</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '60vw',
            }}
          >
            <TextField
              sx={{
                margin: 2,
              }}
              id='outlined-select-currency-native'
              select
              label='Project'
              value={project}
              onChange={handleChangeP}
              SelectProps={{
                native: true,
              }}
            >
              {projects.map((option: Project) => (
                <option key={option.ProjectID} value={option.ProjectName}>
                  {option.ProjectIsActive ? option.ProjectName : ''}
                </option>
              ))}
            </TextField>
            <TextField
              sx={{
                margin: 2,
              }}
              id='outlined-select-currency-native'
              select
              label='Category'
              value={category}
              onChange={handleChangeC}
              SelectProps={{
                native: true,
              }}
            >
              {currentProject.ProjectCategories.map((category: Category) => (
                <option key={category.CategoryID} value={category.CategoryName}>
                  {category.CategoryName ? category.CategoryName : ''}
                </option>
              ))}
            </TextField>

            <label htmlFor='date' style={{ marginLeft: 15 }}>
              Select the date
            </label>
            <input
              style={{ marginLeft: 15, marginBottom: 5 }}
              type='date'
              id='date'
              name='trip-start'
              value={date.split('T')[0]}
              onChange={(e) => setDate(new Date(e.target.value).toISOString())}
            />

            <TextField
              sx={{
                margin: 2,
              }}
              id='outlined-number'
              label='Hours'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setHours(parseInt(e.target.value))}
            ></TextField>
            <TextField
              sx={{
                margin: 2,
              }}
              id='filled-helperText'
              label='Ticket'
              variant='outlined'
              onChange={(e) => setTicket(e.target.value)}
            ></TextField>
            <TextareaAutosize
              style={{
                height: 50,
                width: 790,
                marginLeft: 15,
                marginBottom: 10,
              }}
              placeholder='Description'
              onChange={(e) => setComments(e.target.value)}
            />
          </DialogContentText>
          <Button
            style={{ marginLeft: 15 }}
            variant='outlined'
            onClick={() => {
              handleClick();
              handleClose();
            }}
          >
            Guardar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
