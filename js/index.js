// importing editor interface, html, css, and js files using its id
var editor = document.getElementById('editor');
	var css = document.getElementById('css');
	var js = document.getElementById('js');

// impoting editors output elements using its id
  var code = document.getElementById('mobileview').contentWindow.document;
	var desktopview = document.getElementById('desktopview').contentWindow.document;
  
  var settingpop = document.getElementById('setting-pop');
  var menubarlist = document.getElementById('menu-bar-list');
  var filesnames  = document.querySelector('.files-names');
  var filesnamesnote  = document.querySelector('.files-names-note');
  var filesnameslist  = document.getElementById('files-names-list');
  var serverdivice  = document.querySelector('.server-divice');
  var serverdivicenote  = document.querySelector('.server-divice-note');
  var serverdiviceframe = document.getElementById('server-divice-frame');
  var liverserveron = document.getElementById('liver-server-on');
  var liverserveroff = document.getElementById('liver-server-off');
  var iframeframe  = document.querySelector('.iframe-frame');
  var serverdesktopdivice = document.getElementById('server-desktop-divice');
  var servermobiledivice = document.getElementById('server-mobile-divice');
  var mobileviewiframe = document.querySelector('.mobileviewiframe');
  var desktopviewiframe = document.querySelector('.desktopviewiframe');

var htmlfile = document.querySelector('.html-file');
var cssfile = document.querySelector('.css-file');
var jsfile = document.querySelector('.js-file');
var mobileframeimg = document.querySelector('.mobile-frame-img');

// importing Editor load file As "Pop-up alert" element
var whareloadpopup = document.querySelector('.whare-load-popup');
// importing upload new file button input
var fileToLoadaccept = document.querySelector('.fileToLoadaccept');
// importing Editor load file As "Pop-up alert" <select> Element
var filesselect = document.getElementById("files-select");

var savehtml = document.getElementById("savehtml");
var savecss = document.getElementById("savecss");
var savejs = document.getElementById("savejs");

var openhtml = document.getElementById("openhtml");
var opencss = document.getElementById("opencss");
var openjs = document.getElementById("openjs");

// importing download, export any currant file to local device <li> buttons
var saveashtml = document.getElementById("saveashtml");
var saveascss = document.getElementById("saveascss");
var saveasjs = document.getElementById("saveasjs");

var savecurrantfilepopup = document.querySelector(".save-currant-file-popup");
var saveaspopup = document.querySelector(".save-as-pop-up");
var saveaspopupinput = document.querySelector(".save-as-pop-up input");

var showsveashtmlbtn = document.getElementById("showsveashtmlbtn");
var showsveascssbtn = document.getElementById("showsveascssbtn");
var showsveasjsbtn = document.getElementById("showsveasjsbtn");

var OpenHideNewhtml = document.getElementById("OpenHideNewhtml");
var OpenSaveNewhtml = document.getElementById("OpenSaveNewhtml");

var OpenHideNewcss = document.getElementById("OpenHideNewcss");
var OpenSaveNewcss = document.getElementById("OpenSaveNewcss");

var OpenHideNewjs = document.getElementById("OpenHideNewjs");
var OpenHideNewjs =  document.getElementById("OpenHideNewjs");


// function to compile codes
function compiler(){
	document.body.onkeyup = function(){
    desktopview.open();
    desktopview.writeln(editor.value+'<style>'+css.value+'</style>'+"<script>"+js.value+ "</script>");
 desktopview.close();

    code.open();
		code.writeln(editor.value+'<style>'+css.value+'</style>'+"<script>"+js.value+ "</script>");
		code.close();

	};
}
compiler();

function hideitems() {
menubarlist.style.display = "none";
filesnameslist.style.display = "none";
serverdiviceframe.style.display = "none";
savecurrantfilepopup.style.display="none";
};

// show (menu-bar list) btn icon
settingpop.addEventListener("click",function(event) {
menubarlist.style.display = "block";
filesnameslist.style.display = "none";
serverdiviceframe.style.display = "none";
},false);

// show (files name container) btn
filesnames.addEventListener("click",function(event) {
filesnameslist.style.display = "block";
menubarlist.style.display = "none";
serverdiviceframe.style.display = "none";
saveaspopup.style.display ="none";
},false);

// show (server divice list container) btn
serverdivice.addEventListener("click",function(event) {
serverdiviceframe.style.display = "block";
filesnameslist.style.display = "none";
menubarlist.style.display = "none";

iframeframe.style.display = "flex";
liverserveroff.style.display = "none";
liverserveron.style.display = "flex";
  editor.style.width = "45%";
  css.style.width = "45%";
  js.style.width = "45%";

       desktopview.open();
    desktopview.writeln(editor.value+'<style>'+css.value+'</style>'+"<script>"+js.value+ "</script>");
 desktopview.close();
    code.open();
    code.writeln(editor.value+'<style>'+css.value+'</style>'+"<script>"+js.value+ "</script>");
    code.close();
  },false);

// live server off btn 
liverserveroff.addEventListener("click",function(event) {
iframeframe.style.display = "flex";
this.style.display = "none";
liverserveron.style.display = "flex";
serverdiviceframe.style.display = "none";
  editor.style.width = "45%";
  css.style.width = "45%";
  js.style.width = "45%";

     desktopview.open();
    desktopview.writeln(editor.value+'<style>'+css.value+'</style>'+"<script>"+js.value+ "</script>");
 desktopview.close();
    code.open();
    code.writeln(editor.value+'<style>'+css.value+'</style>'+"<script>"+js.value+ "</script>");
    code.close();
    },false);

// live server on btn 
liverserveron.addEventListener("click",function(event) {
iframeframe.style.display = "none";
this.style.display = "none";
liverserveroff.style.display = "flex";
serverdiviceframe.style.display = "none";
  editor.style.width = "100%";
  css.style.width = "100%";
  js.style.width = "100%";
    },false);

// show (server desktop device) btn 
serverdesktopdivice.addEventListener("click",function(event) {
serverdivicenote.innerHTML = "Desktop";
serverdiviceframe.style.display = "none";
mobileviewiframe.style.display = "none";
mobileframeimg.style.display = "none";
desktopviewiframe.style.display = "block";
   },false);

// show (server mobile divice) btn 
servermobiledivice.addEventListener("click",function(event) {
serverdivicenote.innerHTML = "Mobile";
serverdiviceframe.style.display = "none";
mobileviewiframe.style.display = "block";
mobileframeimg.style.display = "block";
desktopviewiframe.style.display = "none";
 },false);


// display Html code editor interface function
htmlfile.addEventListener("click",function(event) {
  showHtmlEditorFunction();
     },false);

     function showHtmlEditorFunction() {
      editor.style.display = "block";
 css.style.display = "none";
js.style.display = "none";
filesnamesnote.innerHTML = "HTML File";
filesnameslist.style.display = "none";

savehtml.style.display = "block";
savecss.style.display = "none";
savejs.style.display = "none";

openhtml.style.display = "block";
opencss.style.display = "none";
openjs.style.display = "none";

saveashtml.style.display = "block";
saveascss.style.display = "none";
saveasjs.style.display = "none";

OpenHideNewhtml.style.display = "block";
OpenSaveNewhtml.style.display = "block";
OpenHideNewcss.style.display = "none";
OpenSaveNewcss.style.display = "none";
OpenHideNewjs.style.display = "none";
OpenSaveNewjs.style.display = "none";

showsveashtmlbtn.style.display = "block";
showsveascssbtn.style.display = "none";
showsveasjsbtn.style.display = "none";

HtmlTextCouter();
     }


// display Css code editor interface function
cssfile.addEventListener("click",function(event) {
  showCssEditorFunction();
     },false);

    function showCssEditorFunction() {
      css.style.display = "block";
      js.style.display = "none";
      editor.style.display = "none";
      filesnamesnote.innerHTML = "CSS File";
      filesnameslist.style.display = "none";
      
      savehtml.style.display = "none";
      savecss.style.display = "block";
      savejs.style.display = "none";
      
      openhtml.style.display = "none";
      opencss.style.display = "block";
      openjs.style.display = "none";
      
      saveashtml.style.display = "none";
      saveascss.style.display = "block";
      saveasjs.style.display = "none";
      
      OpenHideNewhtml.style.display = "none";
      OpenSaveNewhtml.style.display = "none";
      OpenHideNewcss.style.display = "block";
      OpenSaveNewcss.style.display = "block";
      OpenHideNewjs.style.display = "none";
      OpenSaveNewjs.style.display = "none";
      
      showsveashtmlbtn.style.display = "none";
      showsveascssbtn.style.display = "block";
      showsveasjsbtn.style.display = "none";
      
      CssTextCouter();
     }

     
// display js code editor interface function
jsfile.addEventListener("click",function(event) {
  showJsEditorFunction();
     },false);

function showJsEditorFunction() {
js.style.display = "block";
editor.style.display = "none";
 css.style.display = "none";
filesnamesnote.innerHTML = "JS File";
filesnameslist.style.display = "none";

savehtml.style.display = "none";
savecss.style.display = "none";
savejs.style.display = "block";

openhtml.style.display = "none";
opencss.style.display = "none";
openjs.style.display = "block";

saveashtml.style.display = "none";
saveascss.style.display = "none";
saveasjs.style.display = "block";

OpenHideNewhtml.style.display = "none";
OpenSaveNewhtml.style.display = "none";
OpenHideNewcss.style.display = "none";
OpenSaveNewcss.style.display = "none";
OpenHideNewjs.style.display = "block";
OpenSaveNewjs.style.display = "block";

showsveashtmlbtn.style.display = "none";
showsveascssbtn.style.display = "none";
showsveasjsbtn.style.display = "block";

JsTextCouter();
     }

// function to create & import file
function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;

var values = filesselect.options[filesselect.selectedIndex].text;

if (filesselect.value ==  "htmlfile"){
       editor.value = textFromFileLoaded;

  showHtmlEditorFunction();
HtmlAutoSize();
};
if (filesselect.value ==  "cssfile"){
       css.value = textFromFileLoaded;

 showCssEditorFunction();
CssAutoSize();
};
if (filesselect.value ==  "jsfile"){
       js.value = textFromFileLoaded;
  
  showJsEditorFunction();    
JsAutoSize();
};
  whareloadpopup.style.display="none";

    desktopview.open();
    desktopview.writeln(editor.value+'<style>'+css.value+'</style>'+"<script>"+js.value+ "</script>");
 desktopview.close();
    code.open();
    code.writeln(editor.value+'<style>'+css.value+'</style>'+"<script>"+js.value+ "</script>");
    code.close();
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
function showwareload() {
  whareloadpopup.style.display="grid";
}
function hidewhareloadpopup(){
  whareloadpopup.style.display="none";
  saveaspopup.style.display="none";
}

// functions to display load file Pop-up alert
function savehtmlFile(){
  saveaspopup.style.display="flex";
menubarlist.style.display = "none";
saveaspopupinput.value = "";
      };
function savecssFile(){
  saveaspopup.style.display="flex";
menubarlist.style.display = "none";
saveaspopupinput.value = "";
      };
      function savejsFile(){
  saveaspopup.style.display="flex";
menubarlist.style.display = "none";
saveaspopupinput.value = "";
 };

// function to export, download html file data to local device
function sveashtmlbtn(){
         const link = document.createElement("a");
         const content = editor.value;
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = saveaspopupinput.value;
         link.click();
         URL.revokeObjectURL(link.href);
  saveaspopup.style.display="none";

      editor.value = "";

HtmlAutoSize();
HtmlTextCouter();
    saveehtml();
}
// function to export, download css file data to local device
function sveascssbtn(){
      const link = document.createElement("a");
         const content = css.value;
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = saveaspopupinput.value;
         link.click();
         URL.revokeObjectURL(link.href);
  saveaspopup.style.display="none";

      css.value = "";

CssAutoSize();
CssTextCouter();
    saveecss();
}
// function to export, download js file data to local device
function sveasjsbtn(){
  const link = document.createElement("a");
         const content = js.value;
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = saveaspopupinput.value;
         link.click();
         URL.revokeObjectURL(link.href);
  saveaspopup.style.display="none";

      js.value = "";

JsAutoSize();
JsTextCouter();
saveejs();
}


// arrays to store Saved files data from localStorage
var htmlLocalstorages = [];
var cssLocalstorages = [];
var jsLocalstorages = [];
// function to save html editor file data to browser local Storage
function saveehtml(){
var Item = editor.value; 
localStorage.setItem("htmlLocalstorages", Item);
menubarlist.style.display = "none";
}
// function to save css editor file data to browser local Storage
function saveecss(){
var Items = css.value; 
localStorage.setItem("cssLocalstorages", Items);
menubarlist.style.display = "none";
}
// function to save js editor file data to browser local Storage
function saveejs(){
var Item = js.value; 
localStorage.setItem("jsLocalstorages", Item);
menubarlist.style.display = "none";
}
// retrieve all stored files data when browser loaded
 editor.value = localStorage.getItem("htmlLocalstorages");
 css.value = localStorage.getItem("cssLocalstorages");
 js.value = localStorage.getItem("jsLocalstorages");
  
// functions to show (want saving currant file, pop-up)
  function opennewhtmlfile(){
    savecurrantfilepopup.style.display="flex";
  };
    function opennewcssfile(){
         savecurrantfilepopup.style.display="flex";
  };
    function opennewjsfile(){
         savecurrantfilepopup.style.display="flex";
  };

// function to clear html data saved on local browser
function openhidenewhtmlfile(){
    localStorage.removeItem("htmlLocalstorages");
    editor.value = "";
hideitems();

HtmlAutoSize();
HtmlTextCouter();
saveehtml();
  };
// function to clear css data saved on local browser
    function openhidenewcssfile(){
localStorage.removeItem("cssLocalstorages");
    css.value = "";
hideitems();

CssAutoSize();
CssTextCouter();
saveecss();
  };
// function to clear js data saved on local browser
    function openhidenewjsfile(){
    localStorage.removeItem("jsLocalstorages");
    js.value = "";
    hideitems();
    
    JsAutoSize();
    JsTextCouter();
    saveejs();
  };

// functions to hide (want saving currant file, pop-up)
function opensavenewhtmlfile(){
  savehtmlFile();
    savecurrantfilepopup.style.display="none";
}
function opensavenewcssfile(){
  savecssFile();
    savecurrantfilepopup.style.display="none";
}
function opensavenewjsfile(){
  savejsFile();
    savecurrantfilepopup.style.display="none";
}

// function to refresh editor
function saveRefresh(){
  saveehtml();
saveecss();
saveejs();
window.location.reload();
this.style.display="none";
}


// All codes counter Container
// importing editor code line counter container
var output = document.getElementById('counter');
 output.innerHTML = 1;

//  counter for html editor file
 editor.addEventListener('input',HtmlTextCouter);
//  counter for js editor file
js.addEventListener('input',JsTextCouter);

//  counter for css editor file
  css.addEventListener('input',CssTextCouter);

// auto Resize the files height
 function autoResize() {
   this.style.height = 'auto';
   this.style.height = this.scrollHeight + 'px';
 }

// Events to listen all files Input
 css.addEventListener('input',autoResize,false);
 editor.addEventListener('input',autoResize,false);
 js.addEventListener('input',autoResize,false);


//  count all files when load or reload window
 let lenCss = css.value.split("\n").length;
 let lensJs = js.value.split("\n").length;
 let lenEditor = editor.value.split("\n").length;
 let TemptextCss = "";
 let TemptextJs = "";
 let TemptextEditor = "";
 let numCss = 0;
 let numJs = 0;
 let numEditor = 0;

 for (let count = 1; count < lenCss +1; count++) {
 TemptextCss += count;
 numCss++;
 TemptextCss += "<br>";
 }
 for (let count = 1; count < lensJs +1; count++) {
  TemptextJs += count;
  numJs++;
  TemptextJs += "<br>";
  }
  for (let count = 1; count < lenEditor +1; count++) {
    TemptextEditor += count;
    numEditor++;
    TemptextEditor += "<br>";
    }

 if(TemptextCss === ""){
 output.innerHTML = 1;
 }
 if(TemptextJs === ""){
  output.innerHTML = 1;
  }
  if(TemptextEditor === ""){
    output.innerHTML = 1;
    }
  output.innerHTML = TemptextCss;
  output.innerHTML = TemptextJs;
  output.innerHTML = TemptextEditor;

  // auto Resize the files height if load or reload window
editor.style.height = 'auto';
editor.style.height = editor.scrollHeight + 'px';

window.onclick = function() {
  css.style.height = 'auto';
  css.style.height = css.scrollHeight + 'px';

   js.style.height = 'auto';
   js.style.height = js.scrollHeight + 'px';
}



function HtmlTextCouter() {
let len = editor.value.split("\n").length;
let Temptext = "";
let num = 0;
for (let count = 1; count < len +1; count++) {
Temptext += count;
num++;
Temptext += "<br>";
}
if(Temptext === ""){
output.innerHTML = 1;
}
output.innerHTML = Temptext;
}
function HtmlAutoSize() {
editor.style.height = 'auto';
editor.style.height = editor.scrollHeight + 'px';
}

function JsTextCouter() {
  let len = js.value.split("\n").length;
let Temptext = "";
let num = 0;
for (let count = 1; count < len +1; count++) {
Temptext += count;
num++;
Temptext += "<br>";
}
if(Temptext === ""){
output.innerHTML = 1;
}
output.innerHTML = Temptext;
}
function JsAutoSize() {
js.style.height = 'auto';
js.style.height = js.scrollHeight + 'px';
}

function CssTextCouter() {
  let len = css.value.split("\n").length;
  let Temptext = "";
  let num = 0;
  for (let count = 1; count < len +1; count++) {
  Temptext += count;
  num++;
  Temptext += "<br>";
  }
  if(Temptext === ""){
  output.innerHTML = 1;
  }
  output.innerHTML = Temptext;
  }
  function CssAutoSize() {
  css.style.height = 'auto';
  css.style.height = css.scrollHeight + 'px';
  }
  