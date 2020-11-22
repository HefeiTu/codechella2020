var AWS = require('aws-sdk');

export default class AWSConnection {
    constructor() {
        // this.AWS = require('aws-sdk');
        // set bucket name
        this.BUCKET_NAME = 'twiterhackathon';

        var myCredentials = new AWS.Credentials();

        // var configFile = JSON.parse('./credentials.json');
        // fetch('./credentials.json')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         alert('data:', data);
        //     });



        myCredentials.accessKeyId = 'AKIAWLIXCNSOQHSKIAGC';
        myCredentials.secretAccessKey = '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';
        var myConfig = new AWS.Config({
            credentials: myCredentials,
            region: 'us-east-1'

        });

        this.s3 = new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: this.BUCKET_NAME }
        })

        AWS.config.update(myConfig);
        console.log(AWS.config);
    }


    uploadFileToS3(fileName, fileData) {

        // var file = files[0];
        // var fileName = file.name;
        // var albumPhotosKey = encodeURIComponent(albumName) + "/";

        // var photoKey = albumPhotosKey + fileName;

        // Use S3 ManagedUpload class as it supports multipart uploads
        console.log(AWS.config);
        var upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: this.BUCKET_NAME,
                Key: fileName,
                Body: fileData,
                // ACL: "public-read"
            }
        });

        var promise = upload.promise();

        promise.then(
            function(data) {
                alert("Successfully uploaded video: ", fileName);
            },
            function(err) {
                return alert("There was an error uploading your video: ", err.message);
            }
        );
    }

}