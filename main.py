import string

import random

length = int(input("Type in the lenght of the password  "))

print('''Choose the characters from this:
         1. Digits
         2. Letters
         3. Special Characters
         4. Exit''')

characterList = ""

while(True):
    choice = int(input("Pick a number  "))
    if(choice == 1):
        characterList += string.ascii_letters
    elif(choice == 2):
        characterList += string.digits
    elif(choice == 3):
        characterList += string.punctuation
    elif(choice == 4):
        break
    else:
        print("Please pick a valid option!")

password = []

for i in range(length):

    randomchar = random.choice(characterList)

    password.append(randomchar)

print("The random password is " + "".join(password))