import React from 'react';
import { Card } from 'react-onsenui';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
    <Card>
      <p>Some content</p>
    </Card>

  </div>
)


export default Home;