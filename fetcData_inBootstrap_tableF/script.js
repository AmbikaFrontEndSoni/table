fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let tableData = "";
    data.map((val) => {
      tableData += `
        <tr>
        <td>${val.title}</td>
        <td>${val.title}</td>`;
    });
    document.getElementById("table").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });
