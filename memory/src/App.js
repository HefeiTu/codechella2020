import logo from './logo.svg';
import './App.css';
import GeoButton from './GeoLocation';
import Button from '@material-ui/core/Button';
import AWSConnection from './s3Connection';

function App() {
  return (
    <div className="App">
      <GeoButton />
      <Button variant="contained" color="primary" onClick={() => {
        var aws = new AWSConnection();
        aws.uploadFileToS3('test', new Blob());
      }} >
        Upload test
      </Button>
    </div>
  );
}

export default App;
