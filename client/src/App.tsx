
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { List, ListItemText, Typography } from '@mui/material';

function App() {
  const [activities,setActivities]=useState<Activity[]>([]);

  useEffect(()=>{
    axios.get<Activity[]>("https://localhost:7275/api/activities")
    .then(response=>setActivities(response.data))
  },[]);

  return (
    <>
    <Typography variant='h3'>Reactivities</Typography>
    <ul>
      {activities.map((activity)=>(
        <List key={activity.id}>
          <ListItemText>{activity.title}</ListItemText>
        </List>
      ))}
    </ul>
    </>
  )
}

export default App
