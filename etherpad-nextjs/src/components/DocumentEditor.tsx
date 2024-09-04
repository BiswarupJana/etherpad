'use client';

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

let socket: any;

const DocumentEditor = ({ padID }: { padID: string }) => {
  const [content, setContent] = useState<string>(''); // Document content state

  // Fetch the initial document content
  useEffect(() => {
    axios.get(`/api/pads/${padID}`).then((res) => setContent(res.data.text));

    // Initialize Socket.io client
    socket = io({
      path: '/api/socket',
    });

    socket.on('connect', () => {
      console.log('Connected to Socket.io server');
    });

    socket.on('documentUpdated', (data:any) => {
      if (data.padID === padID) {
        setContent(data.text); // Update content if the correct pad is updated
      }
    });

    return () => {
      socket.disconnect(); // Clean up when component is unmounted
    };
  }, [padID]);

  const saveDocument = () => {
    axios.post(`/api/pads/${padID}`, { text: content }).then(() => {
      socket.emit('updateDocument', { padID, text: content }); // Emit changes to other clients
    });
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        cols={50}
      />
      <button onClick={saveDocument}>Save</button>
    </div>
  );
};

export default DocumentEditor;
