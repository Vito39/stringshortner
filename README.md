

Algo-
I am using two algorithms then return the minimum length of short output.

constraint-string only has lowercase character

basic idea of algo- if we have to represent 16 in binary than it will take (10000) 5 character but if we have to represent it in decimal than it takes 2 character. we are taking character from ASCII code (33-126) and (161-255) to represent our 141 and 157 base number in string. 


first algo- so we represting a-1, b-2,...., z-26 and convert every 3 letter string to base of 141 base integer beacause of  (27)^1.5<141 then it will reduce the size of string by (10/15)~(2/3). so we take every
3 character of string and convert to base number 141. in decode we just take 2 number and convert it into 27 base number than give 1-a, 2-b, ......, z-26 to correspondence number and represent to it our string.

second algo- first we compress our string like- aaabbceddd => a3b2ced3 than we let it it has 37 character (a-z) and (0-9) than we 157 as out base number and  convert it to 157 base number for every 7 string and it convert into 5 character . in decoding we convert 5 character into base 37 number and give every number to it's char value. and decompress it.


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


App-link-https://kamalstringfrontend.herokuapp.com/


To run this app on your local clone the app and open terminal on client folder
[1]. run npm install (client directory)
[2]. run npm start
now on server folder
[1]. run npm install (server directory)
[2]. run npm start