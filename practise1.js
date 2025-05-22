const sidebarData = [
  {
    title: "MENU",
    items: [
      { name: "Dashboard", icon: "fa-solid fa-plane-up" },
      { name: "Analytics" },
      { name: "Commerce" },
      { name: "Sales" },
      {
        name: "Minimal",
        submenu: [
          { name: "Variation1" },
          { name: "Variation2" },
        ],
      },
      { name: "CRM" },
    ],
  },
  {
    title: "UI COMPONENTS",
    items: [
      { name: "Elements", icon: "fa-regular fa-gem" },
      { name: "Components", icon: "fa-solid fa-truck-front" },
      { name: "Tables", icon: "fa-solid fa-table-cells" },
    ],
  },
  // Add more sections as needed...
];

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');

  sidebarData.map(section => {
    const sectionDiv = document.createElement('div');
    
    const h2 = document.createElement('h2');
    h2.textContent = section.title;
    sectionDiv.appendChild(h2);

    section.items.map(item => {
      const h3 = document.createElement('h3');
      const a = document.createElement('a');
      a.href = "#";
      
      if (item.icon) {
        const icon = document.createElement('i');
        icon.className = item.icon;
        a.appendChild(icon);
      }
      
      a.appendChild(document.createTextNode(item.name));
      h3.appendChild(a);

      if (item.submenu) {
        const ul = document.createElement('ul');
        
        item.submenu.map(subItem => {
          const li = document.createElement('li');
          const subA = document.createElement('a');
          subA.href = "#";
          subA.textContent = subItem.name;
          li.appendChild(subA);
          ul.appendChild(li);
        });

        h3.appendChild(ul);
      }

      sectionDiv.appendChild(h3);
    });

    sidebar.appendChild(sectionDiv);
  });
}

renderSidebar();
