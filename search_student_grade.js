const students = ["John", "Jane", "Mary", "Mark", "Bob", "Tom", ];
const grades = [90, 85, 67, 78, 88, 92 ];


const search = (name) => {
    if (students.includes(name)){
        return grades[students.indexOf(name)]
    } else return "Not Found";
} 

console.log(search("Mark"));