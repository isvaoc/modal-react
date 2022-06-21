import * as React from "react";
import { Alert } from "@mui/material";
import '../App.css'

interface Day {
  day: number;
  activity: boolean;
  date: Date;
}

export default function Calendar(props: any) {
  let monthArr: Day[] = [];
  const [renderMonth, setRenderMonth] = React.useState<Day[]>([]);
  const [year, setYear] = React.useState(props.date.getFullYear());
  const [month, setMonth] = React.useState(props.date.getMonth());
  const [alert, setAlert] = React.useState(false);

  React.useEffect(() => {
    calendarLogic();
    setRenderMonth(monthArr);
  }, []);

  const calendarLogic = (): void => {
    const firstDayOfMonth: number = new Date(`${year}-${month + 1}-1`).getDay();
    initialEmptyDays(firstDayOfMonth);
    addDays();
    finalEmptyDays(monthArr);
  };

  const initialEmptyDays = (firstDayOfMonth: number): void => {
    monthArr = [];
    const initialEmptyDays: Day[] = Array(firstDayOfMonth).fill({});
    monthArr.push(...initialEmptyDays);
  };

  const finalEmptyDays = (monthArr: Day[]): Day[] => {
    const finalEmptyDays: Day[] = Array(
      monthArr.length > 35 ? 42 - monthArr.length : 35 - monthArr.length
    ).fill({});
    monthArr.push(...finalEmptyDays);
    return finalEmptyDays;
  };

  const addDays = (): void => {
    let day: Day = { day: 0, activity: false, date: new Date() };
    for (let index: number = 1; index < daysOfMonth(month, year) + 1; index++) {
      day = {
        day: index,
        activity: false,
        date: new Date(year, month, index),
      };
      monthArr.push(day);
    }
  };

  const daysOfMonth = (month: number, year: number) => {
    let daysOfMonth: number = 31;
    if (month === 1) {
      daysOfMonth = isLeap(year) ? 29 : 28;
    } else {
      if (month === 3 || month === 5 || month === 8 || month === 10) {
        daysOfMonth = 30;
      }
    }
    return daysOfMonth;
  };

  const isLeap = (year: number): boolean => {
    return year % 4 == 0 && year % 100 != 0
      ? true
      : year % 400 == 0
      ? true
      : false;
  };

  const selectDay = (i: number): void => {
    monthArr = [];
    monthArr = renderMonth;
    if (monthArr[i].activity) {
      let arr = props.cloneDates;
      arr.splice([arr.indexOf(monthArr[i].date.toISOString().split("T")[0])],1);
      props.setCloneDates(arr);    
    } else if (!monthArr[i].activity) {
      let arr = props.cloneDates;
      arr.push(monthArr[i].date.toISOString().split("T")[0]);
      props.setCloneDates(arr);
    }
    monthArr[i].activity = !monthArr[i].activity;  
    setRenderMonth(monthArr);    
    console.log(renderMonth)
    if (props.cloneDates.length >= 6) setAlert(true);
    else if (props.cloneDates.length <= 6) setAlert(false);
  };
  
  return (
    <div style={{ maxWidth: "35vw" }}>
      <p style={{ textAlign: "center" }}>
        {props.date.toDateString().substring(4, 7)}, {props.date.getFullYear()}
      </p>
      {renderMonth.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            padding: "10px",
            margin: "auto",
          }}
        >
          {renderMonth.map((day: Day, i: number) => {
            if (day.day)
              return (
                <div
                  key={day.date.toISOString()}
                  onClick={() => selectDay(i)}
                  className={day.activity?'active':'inactive'}
                >
                  {day.day}
                </div>
              );
            else return <div style={{ width: "20px", height: "20px" }}></div>;
          })}
        </div>
      ) : (
        <p>Loading</p>
      )}
      {alert ? (
        <Alert severity="warning">You can't choose more than five</Alert>
      ) : null}
    </div>
  );
}
