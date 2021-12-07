import { Card } from '@nxdemo/web/ui'
import Grid from '@mui/material/Grid';

//https://reqres.in/api/users?page=2
const data = [
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "dob": "1990-03-03",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "dob": "1995-03-03",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "dob": "1985-03-03",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
  },
]


export function App() {
  return (
    <Grid container spacing={2}>
      {
        data.map(user => <Grid item md={4}>
          <Card user={user} />
        </Grid>)
      }
    </Grid>
  );
}

export default App;


