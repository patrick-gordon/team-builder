import React, {useState} from 'react';
import './App.css';
import Form from './Form'
import TeamMember from './components/TeamMember'



function App() {

  const [team, setTeam ] = useState([])
  const [update, setUpdate] = useState({})
  const [isUpdated, setIsUpdating] = useState(false)


  return (
   <div>
     <Form setTeam={setTeam} team={team} setUpdate={setUpdate} setIsUpdating={setIsUpdating} update={update} isUpdated={isUpdated}/>
     <TeamMember team={team} setUpdate={setUpdate} setIsUpdating={setIsUpdating}/>
   
    </div>
  );
}

export default App;
