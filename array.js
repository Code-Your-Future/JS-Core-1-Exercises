var students = [{
    name: "simon",
    nationality: "south africa",
    hobbeis: ["javascript"]
}, {
    name: " habiiba",
    nationality: " somalia",
    hobbeis: ["css"]
}];
for (var i = 0; i < students.length; i++) {
    
    if (students ===students[i].name+students.nationality+"somlia"){
        console.log(" i am " + students[i].name + " i come from " + students[i].nationality);

    }else{
        console.log(students[i].name);
    }
}