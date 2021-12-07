import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ageCalculator } from '@nxdemo/web/shared'

export const Card = ({ user }: { user: any }) => {
  return (
    <MuiCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar
          alt="Remy Sharp"
          src={user.avatar}
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h5" component="div">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography color="text.secondary">
          {user.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body2">
          {ageCalculator(new Date(user.dob))} years
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Profile</Button>
      </CardActions>
    </MuiCard>
  );
}