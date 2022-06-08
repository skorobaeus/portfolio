const JSONData = {
  "1":{
    "title":"Демки для Доки",
    "description":{
      "1":"Дока — это добрый справочник для веб-разработчиков, написанный с душой на понятном русском языке.",
      "2":"Для этого проекта я делаю интерактивные примеры кода внутри статей."
    },
    "date":"2019 — наст.",
    "cover":"images/1.png"
  },
  "2":{
    "title":"Биржа Неткоинов",
    "description":{
      "1":"Учебный проект на курсе базового программирования. Мной выполнен дизайн интерфейса и вёрстка с использованием библиотеки ЛИБАНЭЙМ.",
    },
    "date":"2019",
    "cover":"images/1.png"
  },
  "3":{
    "title":"Инфографика",
    "description":{
      "1":"Векторная инфографика на тему ЖКХ. Отрисовала иллюстрации в Adobe Illustator, оттолкнувшись от идеи, набросанной на салфетке.",
    },
    "date":"2016",
    "cover":"images/1.png"
  }   
}

class Project {
  constructor(object) {
    this.title = object.title;
    this.description = object.description;
    this.date = object.date;
    this.img = object.cover;
  }

  createDescription() {
    const description = document.createElement("div");
    for (let line in this.description) {
      let paragraph = document.createElement("p");
      paragraph.classList.add("project-p");
      paragraph.innerText = this.description[line];
      description.appendChild(paragraph);
    }
    console.log(this.img);
    return description.innerHTML;
  }

  fillHTML() {
    const projects = document.querySelector(".projects");

    const project = document.querySelector(".project.template").cloneNode(true);
    project.classList.remove("template");
    project.querySelector(".project-date").innerText = this.date;
    project.querySelector(".project-title").innerText = this.title;
    project.querySelector(".project-description").innerHTML = this.createDescription();
    project.querySelector(".project-cover").src = this.img;

    projects.appendChild(project);
  }
}







let JSONprojects;

try {
  JSONprojects = JSON.parse(JSON.stringify(JSONData))
} catch(e) {
  console.error(e, "Не распарсилось")
}

if (JSONprojects) {
  for (let id in JSONprojects) { 
    const project = new Project(JSONprojects[id]);
    project.fillHTML();
  }
}
