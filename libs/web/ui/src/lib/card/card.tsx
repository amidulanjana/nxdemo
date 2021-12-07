import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ageCalculator } from '@nxdemo/web/shared'

export interface CardProps {
  user: {
    first_name: string;
    last_name: string;
    avatar: string
    email: string
    dob: string
  }
}

export const Card = (props: CardProps) => {
  return (
    <MuiCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar
          alt="Remy Sharp"
          src={props.user?.avatar}
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h5" component="div">
          {props.user?.first_name} {props.user?.last_name}
        </Typography>
        <Typography color="text.secondary">
          {props.user?.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body2">
          {ageCalculator(new Date(props.user?.dob))} years
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Profile</Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card