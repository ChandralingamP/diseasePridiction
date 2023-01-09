import matplotlib.pyplot as plt
import random
import base64
def getPieChart(res):
    if(res == 1):
        val =  random.uniform(5,25)
        return [["YES","NO"],[100-val,val]]
    else:
        val = random.uniform(5,25)
        return [["No","Yes"],[100-val,val]]


        
def getFinalResult(res):
    arr = getPieChart(res)
    mycolors = ["#09DE1E","#FC102C"]
    if(res == 0):
        mycolors = mycolors[::-1]
    plt.figure(figsize=(8,8))
    myexplode = [0.1, 0]
    plt.pie(arr[1], labels = arr[0],startangle = 90,explode=myexplode,colors=mycolors)
    plt.savefig("cache/cached1.png")
    with open("cache/cached1.png", "rb") as img_file:
        my_string = str(base64.b64encode(img_file.read()))
        my_string = my_string[2:len(my_string)-1]
    # decoded_data=base64.b64decode((my_string))
    # # write the decoded data back to original format in  file
    # img_file = open('image.jpeg', 'wb')
    # img_file.write(decoded_data)
    # # img_file.close()
    return [res,my_string,arr[1][0]]

