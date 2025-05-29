const click = document.querySelector('#insert');
window.addEventListener('keydown',function(e){
    click.innerHTML = `<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Keyname</th>
  </tr>
  <tr>
    <td>${e.key === "" ? space : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>`

})