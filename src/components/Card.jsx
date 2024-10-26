
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';


export default function MediaControlCard(data) {
  
  return (
    <Stack direction="row" spacing={1}>
    <Chip icon={<FaceIcon />} color='warning' label={`${data.data.numOfPeopleReached} num Of People Reached`} variant="outlined" />
    <Chip icon={<FaceIcon />} color='info' label=  {`${data.data.numOfPeopleRepent} num Of People Repent`}/>
    <Chip icon={<FaceIcon />} color='success' label=  {`${data.data.numOfPeopleSaved} num Of PeopleSaved`}/>
  </Stack>
  );
}
