var students = [
    {
        name: 'Simon',
        nationality: 'South Afric',
        hobbies: ['javascript']
    }, {
        name: 'Habbia',
        nationality: 'Somalia',
        hobbies: ['css']
    }
];
for (var i = 0; i < students.length; i++) {
    if (students[i].nationality === 'Somalia') {
        console.log('I am ' + students[i].name + ' from ' + students[i].nationality);
    }else(students[i].nationality === 'South Arrica'){
        console.log()
    }
}