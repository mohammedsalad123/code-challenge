let X=studentGrade //declared a variable of student grade.
//declared function studentGrade which passed student marks corresponding the student grade using the if else statement
function studentGrade (X){ 
    if(X>79){
        return "A"
    }else if (X>=60 && X<=79){
        return "B-"
    }else if (X>=49 && X<60){
        return "C-"
    }else if (X>=40 && X<49){
        return "D-"

    }else if(X<40){
        return "E"
    }
}console.log(studentGrade(89)) //console.log student student marks so as to get the grade.