import React from 'react';
import List from '../components/UserList';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div className="homepage">
      <Menu></Menu>
      <List></List>
      Hello world
    </div>
  );
};

export default Home;