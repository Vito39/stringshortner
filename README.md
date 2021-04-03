

Algo-
I am using two algorithms then return the minimum length of short output.

constraint-string only has lowercase character

basic idea of algo- if we have to represent 16 in binary than it will take (10000) 5 character but if we have to represent it in decimal than it takes 2 character. we are taking character from ASCII code (33-126) and (161-255) to represent our 141 and 157 base number in string. 

make an array of 62 char (A-Z)+(a-z)+(0-9). we will use this array to replace the integer place value
for example in hexadecimal we use A in the place of 10 , B in the place of 11.

first algo- so we represting a-1, b-2,...., z-26 and convert every 5 letter string to decimal and then converted to base of 62 base integer beacause of  (27)^1.25<62 (1/1.25)~(4/5) so every 5 char of original string will converted into 4 char of 62 base number so the total size of string will be reduce by (1/5). so we take every 5 character of string and convert to base number 62 instead of giving them number we are placing char. in decode we just take 4  char and then convert it into the decimal value then  and convert it into 27 base number than give 1-a, 2-b, ......, z-26 to correspondence number and represent to it our string.

second algo- first we compress our string like- aaabbceddd => a3b2ced3 than we let it it has 37 character (a-z) and (0-9) than we take 37 as our base number and  convert it to decimal value then converted it into 62 base number. for every 8 char of original string  and it convert into 7 character 37^1.1422<62 and (1/1.1422)~.875 so the size of decompress string will be reduce by 12.5%




minimum of both we return.
it gurantee that it will reduce the length of string by 33%. 


stack used - Node.js,React.js

test case-
ldhsahafoghadfhglfjdlh
aaaaaaaaaaaaaaaaaaaaaaa
asdfadsgfdagjkglkdfjgl
cvxbxcvbxcvbcvnrtty
bbbbbbbggggggggggggghdgjukhgndghj
qweryhiwequrqwt
uiouojjmlmnkjhkbnkbjksda
cbvivucrghjorxheqoci


App-link-https://kamalstringfrontend1.herokuapp.com/


To run this app on your local clone the app and open terminal on client folder
[1]. run npm install (client directory)
[2]. run npm start
now on server folder
[1]. run npm install (server directory)
[2]. run npm start