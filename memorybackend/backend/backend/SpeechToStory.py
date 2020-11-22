import boto3
import tweepy
import boto3
import json
import SpeechRecognition as sr
import queue
from os import path
from datetime import date

# ============= from s3 to local =============
c = boto.connect_s3()
bucket = c.get_bucket('twitterhackathon') #bucketname: twiterhackathon
bucket_files = bucket.list('') #if not stored in dir, remove subdir, subdir: the name of stored dir
l = [(k.last_modified, k) for k in bucket_files]
key_to_download1 = sorted(l, cmp=lambda x,y: cmp(x[0], y[0]))[-1][1]
key_to_download1.get_contents_to_filename('local_file_name.wav') #local_file change it to the file needed

# ============= add voice file to txt =============

# obtain path to "english.wav" in the same folder as this script
AUDIO_FILE = path.join(path.dirname(path.realpath(__file__)), "local_file_name.wav") #relative path

# use the audio file as the audio source
r = sr.Recognizer()
with sr.AudioFile(AUDIO_FILE) as source:
    audio = r.record(source)  # read the entire audio file
	
# recognize speech using Google Speech Recognition
try:
    result_text = r.recognize_google(audio)
except sr.UnknownValueError:
    print("Google Speech Recognition could not understand audio")
except sr.RequestError as e:
    print("Could not request results from Google Speech Recognition service; {0}".format(e))

# ============

comprehend = boto3.client(service_name='comprehend', region_name='us-east-2')

print('Calling DetectSentiment')
print(json.dumps(comprehend.detect_sentiment(Text=result_text, LanguageCode='en'), sort_keys=True, indent=4))
print('End of DetectSentiment\n')

# ============= send twiter =============
# Authenticate to Twitter
auth = tweepy.OAuthHandler("jaU1Nkudtk5GJ1WMA4c8Wpmu4", "JIwkoGOWkdcDnu7PO8FkAXh4YdrtjAAUZLxXGMuArBwcd6RUY4") 
auth.set_access_token("1329541192929988614-MTwQIbguTnHNia8t4fsjWcQ98IzVHU", "GAqXyN1WWPXPTQEtVUbhtPPNPpRDlz88QFZ3iA2HBZ2Ty")

# Create API object
api = tweepy.API(auth)

# Create a tweet
api.update_status(result_text) #replace Hello Tweepy with the transcript got from step3
'''