// "use strict";

// 1. Cоздать объект student, который содержит следующие свойства: имя, фамилию, пол (isMale), контактные данные, методы: вывод адреса, смена пола (на противоположный).

// const student = {
//   firstName: "Alexandr",
//   lastName: "Poberezhniy",
//   isMale: "male",
//   contact: "ZP, gagarina prospect",
//   getContact() {
//     return `${this.contact}`;
//   },
//   getSubstitutionMale() {
//     return (student.isMale = "female");
//   },
// };

// console.log(student.getContact());
// student.getSubstitutionMale();
//
// ************************************************************
//
// 2 Cоздать объект, который содержит свойства о факультете и кафедре, методы: переименование факультета (метод должен принимать в качестве параметра новое название факультета).
// faculty
//

// const facultInfo = {
//   nameFaculty: "Faculty of Computer Science and Technology",
//   numberOfStudents: "321",
//   numbersOfDisciplines: "74",
//   address: "Gogolya 70",
//   facultyPhone: "38061456753",
//   dean: "Zhulya Volk",
//   renamingOfTheFaculty() {
//     return (facultInfo.nameFaculty = prompt("new name faculty"));
//   },
// };

// facultInfo.renamingOfTheFaculty();
//
//
// 3 Создать функции-конструкторы:
// - книга (автор, название, год издания, издательство)
// * предусмотреть в прототипе метод, который будет возвращать возраст книги в годах.

function InfoBook(author, titleOfBook, yearOfPublication, publishingHouse) {
  if (!new.target) {
    return new InfoBook(
      author,
      titleOfBook,
      yearOfPublication,
      publishingHouse
    );
  }
  this.author = author;
  this.titleOfBook = titleOfBook;
  this.yearOfPublication = yearOfPublication;
  this.publishingHouse = publishingHouse;
}
const infoAge = {};
infoAge.ageBook = function () {
  return 2022 - this.yearOfPublication;
};
InfoBook.prototype = infoAge;

const Metro2033 = InfoBook(
  "Dmitry Glukhovsky",
  "Metro 2033",
  "2005",
  "Textbook - Bogdan"
);

const Kotigoroshko = new InfoBook(
  "Narod",
  "Kotigoroshko",
  "1978",
  "In babushka polochka"
);

console.log("age book =", Metro2033.ageBook());

console.log("на даный момент у книги возраст", Kotigoroshko.ageBook(), "лет");
