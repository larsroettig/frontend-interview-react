import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="h-20 bg-indigo-100 text-gray-600">
      <ul className="flex items-center justify-between h-full px-10">
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/livechat">
          <li> Live chat</li>
        </Link>
        <li>
          <ul>
            <li>
              <b>Current User:</b>
            </li>
            <li>{user.name}</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
