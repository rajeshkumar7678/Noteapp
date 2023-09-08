import React from 'react';
import { useUser } from '../UserContext';

export default function UserProfile() {
  const { user } = useUser();

  if (!user) {
    return <p style={{marginTop:"10px"}}></p>; // Handle if user data is not available yet
  }

  return (
    <div>
      <h2 style={{color:"white"}}>Welcome, {user.name}!</h2>
      
    </div>
  );
}
