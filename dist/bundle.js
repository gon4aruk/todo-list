(()=>{"use strict";const t="https://60322069081a010017547728.mockapi.io/api/v1/tasks",e=()=>fetch(t).then((t=>t.json())),n=document.querySelector(".list"),s=({text:t,done:e,id:n})=>{const s=document.createElement("li");s.classList.add("list__item");const a=((t,e)=>{const n=document.createElement("input");return n.setAttribute("type","checkbox"),n.classList.add("list__item-checkbox"),n.checked=t,n.dataset.id=e,n})(e,n);e&&s.classList.add("list__item_done");const i=document.createElement("span");i.classList.add("list__item_text"),i.textContent=t;const c=document.createElement("button");return c.classList.add("list__item_delete-btn"),c.dataset.id=n,s.append(a,i,c),s},a=()=>{e().then((t=>(t=>{n.innerHTML="";const e=t.sort(((t,e)=>t.done-e.done||new Date(e.timeOfChange)-new Date(t.timeOfChange))).map(s);n.append(...e)})(t)))},i=document.querySelector(".task-input"),c=()=>{if(""===i.value)return;const e=i.value;i.value="";var n;(n={text:e,done:!1,timeOfChange:new Date},fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)})).then((()=>a()))},d=n=>{const s=n.target.classList.contains("list__item-checkbox"),i=n.target.classList.contains("list__item_delete-btn");s?(n=>{const s=n.target.dataset.id;e().then((t=>((t,e,n)=>{const{done:s,...a}=e.find((t=>t.id===n));return{...a,timeOfChange:new Date,done:t.target.checked}})(n,t,s))).then((e=>((e,n)=>fetch(`${t}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)}))(s,e))).then((()=>a()))})(n):i&&(e=>{var n;(n=e.target.dataset.id,fetch(`${t}/${n}`,{method:"DELETE"})).then((()=>a()))})(n)};document.addEventListener("DOMContentLoaded",(()=>{a(),document.querySelector(".btn").addEventListener("click",c),document.querySelector(".list").addEventListener("click",d)})),window.addEventListener("storage",(t=>{"tasksList"===t.key&&a()}))})();