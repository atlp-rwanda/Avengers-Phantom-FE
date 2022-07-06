import React, {useState} from 'react'; 
import ViewProfile from './viewProfile.jsx';
import UpdateProfile from './updateProfile.jsx'; 

const UserProfile  = () => {
    const [editMode, setEditMode] = useState(false)
  return (
    <div>
        {!editMode ? <ViewProfile setEditMode={setEditMode}/> : (
        <UpdateProfile  setEditMode={setEditMode}/>) }
      
    </div>
  )
}

export default UserProfile;