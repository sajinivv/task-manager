import React from 'react';
import { useUser } from '../../context/UserProvider';

const ProfileCard: React.FC = () => {
const user = useUser();

  return (
    <div className="card text-center mb-4">
      <img src={user.image} className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} alt="User" />
      <div className="card-body">
        <h5 className="card-title" role='user-name'>{user.name}</h5>
        <p className="card-text" role='user-email'>{user.email}</p>
        <p className="card-text" role='user-url'>{user.url}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
