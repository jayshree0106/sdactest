const student=[
    {name:"tom",marks:80},
    {name:"mom",marks:90},
    {name:"marry",marks:85},
    {name:"jerry",marks:90},
    {name:"tom",marks:50},
]

const filt=student.filter((student,marks)=>{
    if(student.marks>80){
        return student.marks;
    }

})
console.log(filt);
