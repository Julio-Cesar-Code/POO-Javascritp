class Comment {
  constructor({
    content,
    studentName,
    studentRole= "Estudiante",
  }){
    this.content=content;
    this.studentName=studentName;
    this.studentRole=studentRole;
    this.likes=0
  }

  publicar (){
    console.log(this.studentName + "("+this.studentRole+ ")")
    console.log(this.likes + "likes");
    console.log(this.content)
  }
}
function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
  
  
  
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
  

  
}
class PlatziClass {
  constructor({
    name,
    videoId,

  }) {
    this.name = name;
    this._videoId = videoId;
  }
  reproducir() {
    videoPlay(this._videoId);
  }
  pausar() {
    videoStop(this._videoId)
  }
}

class Course {
  constructor({
    name,
    classes = [],
    isFree=false,
    lang="Spanish"
  }) {
    this._name = name;
    this._classes = classes;
    this.isFree=isFree;
    this.lang=lang;
  }
  get name() {
    return this._name;
  }
  set name(nuevonombre) {
    if (nuevonombre === "Curso Malito de programacion basica") {
      console.error("Te veo modo tirado")
    } else {

      this._name = nuevonombre;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

cursoProgBasica.name = "Calidad"
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});


class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this._name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})









class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this._name = name;
    this.email = email;
    this._username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
  publicarComentario (commentContent){
    const comment=new Comment({
      content:commentContent,
      studentName: this.name,
      
    });
    comment.publicar();
  }
}



class FreeStudent extends Student{
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse){
    if (newCourse.isFree){
      this.approvedCourses.push(newCourse)
    } else {
      console.warn("Lo sentimos")
    }

  }
}
class basiStudent extends Student{
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse){
    if (newCourse.lang!=="english"){
      this.approvedCourses.push(newCourse)
    } else {
      console.warn("Lo sentimos")
    }
    
  }
  
}
class ExpertStudent extends Student{
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse){
      this.approvedCourses.push(newCourse)
  }
}

class TeacherStudent extends Student {
  constructor(props){
    super(props)
  }
  approveCourse(newCourse){
      this.approvedCourses.push(newCourse)
  }
  publicarComentario (commentContent){
    const comment=new Comment({
      content:commentContent,
      studentName: this.name,
      studentRole: "Profesor"
    });
    comment.publicar();
  }
}

const juan2 = new ExpertStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});
const freddy = new TeacherStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new basiStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});


// export {PlatziClass, Student, LearningPath};