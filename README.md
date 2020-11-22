# Memory Hub

Memory Hub could record old people's speech in a fixed interval of time. Then, it could generate a diary according old people's words day by day. So their children
could know what their parents are doing every day and they could see the dairy later.

## Technology Used
- Frontend: React.js, Material UI, Geocode, AWS-SDK, mic-recorder-to-mp3
- Backend: Django, MongoDB
- ML: AWS Transcribe & Google Speech, AWS Comprehend, GPT2

## Flow Chart

![img](https://lh6.googleusercontent.com/xuX5k8-r0ZGr5ykeJVYiaO1fZg3dsPaAQJ2nYio5b8hND499O16DE7AqB8O2Hx4dj64sZ1V5MrAU4T9pAIjpSvwM2Wc1rOC4uYuhskV4vwgnF7Zzcb13cqT0qxdh_jCEF5t8scwrbvg)



## Frontend

### Endpoint



### Features

| Feature   | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Recording | Record audio in 20 minutes pace through out a day            |
| Location  | Get location through GPS and transfrom through Google map API when Recording invoked |
| Upload    | Send a geolocation to Django and store in MongoDB. Upload the corresponding audio pieces to AWS S3 |



## Backend



## Machine Learning

