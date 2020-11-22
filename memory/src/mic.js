import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import MicRecorder from 'mic-recorder-to-mp3';
import Button from '@material-ui/core/Button';
import AWSConnection from './s3Connection';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Pause from '@material-ui/icons/Stop';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    button: {
        [theme.breakpoints.down("sm")]: {
            color: "secondary"
        },
    }
  }));

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class MicButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      isBlocked: false,
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // const blobURL = URL.createObjectURL(blob)
        var aws = new AWSConnection();
        var now = new Date();
        var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        var temp = utc.toUTCString();
        var final = temp.split(/:|,| /);
        final.splice(1, 1)
        aws.uploadFileToS3(final.join("-"), blob);
        this.setState({ isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  render(){
    return (
      <div className={useStyles.button}>
          <Button style={{ "min-length": "20px", width: "13%", fontSize: "1.5vw" }} variant="contained" color="primary" onClick={this.start} startIcon={<KeyboardVoiceIcon />} disabled={this.state.isRecording}>Record</Button>
          <Button style={{ "min-length": "20px", width: "13%", fontSize: "1.5vw"}} variant="contained" color="secondary" onClick={this.stop} startIcon={<Pause />} disabled={!this.state.isRecording}>Stop</Button>
      </div>
    );
  }
}

export default MicButton;