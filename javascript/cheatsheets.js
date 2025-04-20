const sections = [
    {
      title: "HTML",
      headers: ["Tag", "Purpose", "Example"],
      data: [
        ["<div>", "Container for content", "&lt;div&gt;Hello&lt;/div&gt;"],
        ["<a>", "Link to another page", '&lt;a href="https://example.com"&gt;Visit&lt;/a&gt;'],
        ["<img>", "Displays an image", '&lt;img src="img.jpg" alt="Image"&gt;']
      ]
    },
    {
      title: "CSS",
      headers: ["Property", "Usage", "Example"],
      data: [
        ["margin", "Space outside element", "margin: 20px;"],
        ["padding", "Space inside element", "padding: 10px;"],
        ["background-color", "Set background color", "background-color: lightblue;"]
      ]
    },
    {
      title: "JavaScript",
      headers: ["Concept", "Description", "Example"],
      data: [
        ["let / const", "Declare variables", "let x = 5;"],
        ["function()", "Defines a function", "function greet() { alert('Hi'); }"],
        ["document.getElementById()", "Access element by ID", 'document.getElementById("demo")']
      ]
    }
  ];
  
  function generateTable() {
    const table = document.getElementById("cheatsheet-table");
  
    sections.forEach(section => {
  
      const headerRow = document.createElement("tr");
      const headerCell = document.createElement("td");
      headerCell.colSpan = section.headers.length;
      headerCell.className = "section-title";
      headerCell.textContent = section.title;
      headerRow.appendChild(headerCell);
      table.appendChild(headerRow);
  
      // Column Headers
      const titlesRow = document.createElement("tr");
      section.headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        titlesRow.appendChild(th);
      });
      table.appendChild(titlesRow);
  
      // Data Rows
      section.data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
          const td = document.createElement("td");
          td.innerHTML = cell;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
    });
  }
  
  function showMarginExample() {
    alert("This button is for demo purposes to highlight the margin concept!");
  }
  
  window.onload = generateTable;
  