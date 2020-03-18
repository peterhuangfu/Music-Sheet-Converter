# Music Sheet Converter
### 專題指導教授：盧信銘
### 成員
鄭揚 | 林建鋐 | 皇甫立翔 | 劉韋成 | 蔡涵如 | 顏价廷  

## 介紹
音樂是現代人生活的一部份，其中聽寫譜一直是音樂系的必修，在音樂領域中一直都是個技術門檻極高的技能。  

因此，我們希望透過人工智慧的技術，將音樂轉換成可閱讀式的五線譜，藉此降低聽寫譜的門檻需求，讓一般人都可以輕鬆地達成這件事。  

系統呈現：Vue.js + Node.js + MongoDB  

音源分離 & 鋼琴轉譜：Python + Django
* Music Seperation：Stacked Hourglass Model
* Music Transcription：Onset-and-Frames Model

## 操作方法
#### Installation
```
git clone
cd Music-Sheet-Converter/client && npm install
cd ../server && npm install
```
#### Run
Front End
```
cd Music-Sheet-Converter/client
npm run serve
```
Back End
```
cd Music-Sheet-Converter/server
node develop.js
```

## Demo
Youtube：https://youtu.be/UxlcnAGGCPU  

## Warning
Sorry that since the Django server is on private computer, the full functions can only be displayed on demo video.
