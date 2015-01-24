this.data = document.body.innerHTML;

// Test if the webpage concerns infosec or not
var is_infosec = /infosec | security | sécurité | securite/;
var cyber_free_regex = /(cyber(.\w*))/ig;

if(this.data.match(is_infosec)){

  console.log('It\s fucking infosec !');
  chrome.runtime.sendMessage('showPageAction');
  console.log((this.data.match(cyber_free_regex)).length + ' cyber-words detected.');
  //console.log((this.data.match(cyber_free_regex)));
  //console.log(this.data.replace(cyber_free_regex, '$1'));
  document.body.innerHTML = this.data.replace(cyber_free_regex, '$2');

}
else {
  console.log("No cyber-BS here.");
}
