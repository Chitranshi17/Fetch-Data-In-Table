const fetchData = async () => {
  const userData = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await userData.json();


  // console.log(userData).
  users.forEach(data => {
    
    let tbody = document.createElement('tbody');


    tbody.innerHTML += `<tr>
      <th>${data.id}</th>
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>${data.address.city}</td>
    </tr>`

   let table = document.querySelector('table');
   
   table.appendChild(tbody)
  });
}

let button = document.querySelector('button');

button.addEventListener('click', fetchData);
