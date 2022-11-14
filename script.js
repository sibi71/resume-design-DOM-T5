const root = document.getElementById("root");

const div = document.createElement("div");

div.setAttribute("class","container");


const image=document.createElement("img");

image.setAttribute("src","myprofile.jpg","class","img");

const h4 =document.createElement("h4");

h4.setAttribute("class","name");

h4.innerText="ARUNSIBI";

const address = document . createElement("p");

address.setAttribute("class","address");

address.innerText="Trichy | Moblie No:7904613995 | Email:thearunsibi@gmail.com";

const details = document.createElement("div");

details.setAttribute("class","details");

const profile =document.createElement("div");

profile .setAttribute("class","profile");

const picon = document.createElement("i");

picon.classList.add("fa-solid" ,"fa-user","picon");

const ptitle = document.createElement("h5");

ptitle.setAttribute("class","ptitle");

ptitle.innerText="Profile";

const pcon = document.createElement("p");

pcon.setAttribute("class","pcon");

pcon.innerText="A Hardworking and Responsible individual seeking development both for myself and organization.";


const skills = document.createElement("div");

skills.setAttribute("class","skills");

const sicon = document.createElement("i");


sicon.classList.add ("fa-solid","fa-flask","sicon");


const stitle = document.createElement("h5");

stitle.setAttribute("class","stitle");

stitle.innerText="Skills";

const scon =document.createElement("div");

scon.setAttribute("class","scon");

const scontitle=document.createElement("h4");

scontitle.innerText="TECHANICAL SKILLS";


const scon_js = document.createElement("label");

scon_js.setAttribute("class","scon_js");

scon_js.innerHTML="javascript <input type='range'value='80'/>";

const scon_css = document.createElement("label");

scon_css.setAttribute("class","scon_css");

scon_css.innerHTML="CSS <input type='range'value='90'/>";


const scon_HTML = document.createElement("label");

scon_HTML.setAttribute("class","scon_html");

scon_HTML.innerHTML="HTML <input type='range'value='90'/>";

const scon_React = document.createElement("label");

scon_React.setAttribute("class","scon_React");

scon_React.innerHTML="React <input type='range'value='70'/>";

const scon_Redux = document.createElement("label");

scon_Redux.setAttribute("class","scon_Redux");

scon_Redux.innerHTML="Redux <input type='range'value='70'/>";

const scon_mongo = document.createElement("label");

scon_mongo.setAttribute("class","scon_mongo");

scon_mongo.innerHTML="Mongo <input type='range'value='50'/>";


const scon_deployment = document.createElement("label");

scon_deployment .setAttribute("class","scon_deployment ");

scon_deployment .innerHTML="Deployment <input type='range'value='90'/>";

const scontitle_2=document.createElement("h4");

scontitle_2.innerText="ADDITIONAL SKILLS";

const scon_project = document.createElement("label");

scon_project .setAttribute("class","scon_project");

scon_project .innerHTML="Project Management<input type='range'value='80'/>";


const scon_recuitment = document.createElement("label");

scon_recuitment .setAttribute("class","scon_recuitment");

scon_recuitment .innerHTML="Recuitmentv<input type='range'value='60'/>";


const work =document.createElement("div");

work.setAttribute("class","work");

const wicon =document.createElement("i");

wicon.classList.add("fa-solid", "fa-briefcase","wicon");

const wtitle =document.createElement("h4");

wtitle.setAttribute("class","wtitle");

wtitle.innerText="Work experience";

const wcon=document.createElement("p");

wcon.setAttribute("class","wcon");

wcon.innerHTML  =

"<li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li>";

const edu =document.createElement("div");

edu.setAttribute("class","edu");

const eicon = document.createElement ("i") ;

eicon.classList.add("fa-solid","fa-user-graduate","eicon");

const etitle=document.createElement("h4");

etitle.setAttribute("class","etitle");

etitle.innerText="Education";

const econ = document.createElement("p");

econ.setAttribute("class","econ");

econ.innerHTML="<li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li>";

const info =document.createElement("div");

info.setAttribute("class","info");

const iicon = document .createElement("i");
// <i class="fa-solid fa-briefcase"></i>
iicon.classList.add("fa-solid","fa-briefcase","iicon");

const ititle =document.createElement("h4");

ititle.setAttribute("class","ititle");

ititle.innerText="Education";

const infocon =document.createElement("p");

infocon.setAttribute("class","infocon");

infocon.innerHTML=  "<li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li><li>The  section will ask you to specify all schools attended, along with diplomas, certificates and degrees you earned. Sometimes there ...</li>Most paragraphs in an essay have a three-part structure—introduction, body, and conclusion. You can see this structure in paragraphs whether they are narrating, describing, comparing, contrasting, or analyzing information. Each part of the paragraph plays an important role in communicating your meaning to your reader.Most paragraphs in an essay have a three-part structure—introduction, body, and conclusion. You can see this structure in paragraphs whether they are narrating, describing, comparing, contrasting, or analyzing information. Each part of the paragraph plays an important role in communicating your meaning to your reader";






// main
div.append(image);
div.append(h4);
div.append(address);  
root.append(div);
// details
root.append(details);
// education
details.append(edu);
edu.append(eicon);
edu.append(etitle); 
edu.append(econ)
// infomation
details.append(info);
info.append(iicon);
info.append(ititle);
info.append(infocon);

// profile
details.append(profile);
profile.append(picon);
profile.append(ptitle);
profile.append(pcon);
// skills
details.append(skills);
skills.append(sicon);
skills.append(stitle);
skills.append(scon);
scon.append(scontitle);
scon.append(scon_js);
scon.append(scon_css);
scon.append(scon_HTML)
scon.append(scon_React);
scon.append(scon_Redux);
scon.append(scon_mongo);
scon.append(scon_deployment)
scon.append(scontitle_2);
scon.append(scon_project);
scon.append(scon_recuitment);
// work
details.append(work);
work.append(wicon);
work.append(wtitle);
work.append(wcon);







