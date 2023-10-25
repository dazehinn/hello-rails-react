import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/messagesSlice';

const App = () => {
  const dispatch = useDispatch();
  const messageText = useSelector((state) => state.messages);
  console.log(messageText.messages.text);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome! Refresh the page for a new greeting</h1>
      <h3>{messageText.messages.text}</h3>
    </div>
  );
};

export default App