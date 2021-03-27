import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from '../../styles';
import { createEvent, updateEvent } from '../../actions/events';

const Form = ({ currentId, setCurrentId }) => {
  const [eventData, setEventData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const event = useSelector((state) => (currentId ? state.event.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (event) setEventData(event);
  }, [event]);

  const clear = () => {
    setCurrentId(0);
    setEventData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createEvent(eventData));
      clear();
    } else {
      dispatch(updateEvent(currentId, eventData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${event.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={eventData.creator} onChange={(e) => setEventData({ ...eventData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={eventData.title} onChange={(e) => setEventData({ ...eventData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={eventData.message} onChange={(e) => setEventData({ ...eventData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={eventData.tags} onChange={(e) => setEventData({ ...eventData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;