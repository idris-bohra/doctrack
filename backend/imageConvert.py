import requests
import json
import sys
import os

url = 'https://app.nanonets.com/api/v2/OCR/Model/2270a4bd-246f-478b-8b87-0357a2aa3c08/LabelFile/?async=false'
print(str(sys.argv[1]))
filepath2 = str(sys.argv[1])
imgname = str(sys.argv[2])


data = {'file': open(filepath2, 'rb')}

response = requests.post(url, auth=requests.auth.HTTPBasicAuth('UR5EbJznKr4t4w4ojhW00taj50WPGfcI', ''), files=data)

print(response.text)

mylist = []
attend = []
marks=[]
percent = []

ans = response.text
json_object = json.loads(ans)
for result in json_object["result"]:
  for prediction in result["prediction"]:
    for cells in prediction["cells"]:
        if(cells["col"] == 1):
            mylist.append(cells["text"])
        elif(cells["col"] == 2):
            attend.append(cells["text"])
        elif(cells["col"] == 3):
            marks.append(cells["text"])


filenamepart = imgname.split(".")
realfilename = filenamepart[0] + '.txt'
print('realfilename = ',realfilename)




x = os.path.join(r'C:\Users\idris bohra\Desktop\SIH Project\APP\DOCTRACK-APP\backend\files', realfilename)
    
with open(x, "w") as file:
    for x in range(len(mylist)):
        file.write(mylist[x] +"\t\t\t\t\t" +  attend[x] + "\t\t\t\t\t\t" + marks[x]   + "\t\t\t\t\t" + '\n')
