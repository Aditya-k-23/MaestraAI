
# importing the requests library
import requests
 
# api-endpoint
URL = "http://localhost:8000/audioUpload"
 
# location given here
# location = "delhi technological university"
 
# defining a params dict for the parameters to be sent to the API
# PARAMS = {'address':location}
 
# sending get request and saving the response as response object
r = requests.get(url = URL)

data = r.json()

print('data', data)