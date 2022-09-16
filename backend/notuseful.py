# print("hello python")
# import json
# import requests

# url = 'https://app.nanonets.com/api/v2/OCR/Model/b41e03c0-ff6b-49da-b130-c7ef0da9cf3a/LabelFile/?async=false'

# filename = './idris.jpeg'

# data = {'file': open(filename, 'rb')}

# response = requests.post(url, auth=requests.auth.HTTPBasicAuth('FHUojN49dg6V7E7LQ9KY-TIibxMptZ2P', ''), files=data)
# mylist = []
# attend = []
# marks=[]
# percent = []
# ans = response.text

# import requests
# import json
# url = 'https://app.nanonets.com/api/v2/OCR/Model/90237fd5-bd10-4f33-88ce-a924564c479f/LabelFile/?async=false'
# filename = 'https://ibb.co/wQk0vFV'
# data = {'file': open(filename, 'rb')}

# response = requests.post(url, auth=requests.auth.HTTPBasicAuth('feCZdEXzl-eqiQaUuJTO1Lq557DVU3Pr', ''), files=data)

# print(response.text)

# mylist = []
# attend = []
# marks=[]
# percent = []
# ans = response.text
# json_object = json.loads(ans)
# for result in json_object["result"]:
#   for prediction in result["prediction"]:
#     for cells in prediction["cells"]:
#         if(cells["col"] == 1):
#             mylist.append(cells["text"])
#         elif(cells["col"] == 4):
#             percent.append(cells["text"])
#         elif(cells["col"] == 2):
#             attend.append(cells["text"])
#         elif(cells["col"] == 3):
#             marks.append(cells["text"])
        
        # elif(cells["col"] == 5):
        #     marks.append(cells["text"])
        # elif(cells["col"] == 6):
        #     marks.append(cells["text"])
        # elif(cells["col"] == 7):
        #     marks.append(cells["text"])
        # elif(cells["col"] == 8):
        #     marks.append(cells["text"])
        # elif(cells["col"] == 9):
        #     marks.append(cells["text"])
       

# mylist.append(cells["text"].encode('utf-8'))