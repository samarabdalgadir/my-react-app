import React from 'react';

type User = {
  id: number;
  name: string;
};

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li> // 🔑 مفتاح فريد لكل عنصر
      ))}
    </ul>
  );
};

export default UserList;
