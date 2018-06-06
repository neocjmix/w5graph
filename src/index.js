import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = [{
    title: "분실",
    when : [0],
    where : ["숲속"],
    who : ["착한 나뭇꾼"],
    what : ["착한 나뭇꾼의 쇠도끼"],
    why : [],
    content : "착한 나뭇꾼이 숲속에서 쇠도끼로 나무를 하다 연못에 빠뜨렸다."
},{
    title: "솔직한 대답",
    when : [1],
    where : ["숲속"],
    who : ["산신령","착한 나뭇꾼"],
    what : ["착한 나뭇꾼의 쇠도끼","은도끼1","금도끼1"],
    why : [0],
    content : "산신령이 쇠,금,은도끼를 들고 나와 어느것이 네 것이냐고 묻자 착한나뭇꾼은 솔직하게 대답했고, 산신령은 상으로 모든 도끼를 주었다."
},{
    title: "대화",
    when : [2],
    where : ["마을"],
    who : ["착한 나뭇꾼", "못된 나뭇꾼"],
    what : ["착한 나뭇꾼의 쇠도끼","은도끼1","금도끼1"],
    why : [1],
    content : "착한 나뭇꾼은 마을로 돌아가 못된 나뭇꾼에게 산신령을 만난 이야기를 해주었다."
},{
    title: "계략",
    when : [3],
    where : ["숲속"],
    who : ["못된 나뭇꾼"],
    what : ["못된 나뭇꾼의 쇠도끼"],
    why : [2],
    content : "이를 들은 못된 나뭇꾼도 숲속에서 쇠도끼로 나무를 하는척 하다 연못에 빠뜨렸다."
},{
    title: "징벌",
    when : [4],
    where : ["숲속"],
    who : ["산신령","못된 나뭇꾼"],
    what : ["금도끼2"],
    why : [3],
    content : "산신령이 금도끼를 들고 나와 네 것이 맞냐고 묻자 못된 나뭇꾼은 맞다고 대답했고, 산신령은 아무것도 주지 않았다."
},{
    title: "후회",
    when : [5],
    where : ["마을"],
    who : ["못된 나뭇꾼"],
    what : [],
    why : [4],
    content : "못된 나뭇꾼은 빈손으로 마을로 돌아와 후회하였다."
}];

render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
