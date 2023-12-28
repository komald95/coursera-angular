var student={
name:"",
type:"student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener('keyup',keyup);
}

function keyup(event){
  calculateNumericOuput();  
};

function calculateNumericOuput(){
    student.name=document.getElementById('name').value;

    var totalNameValue = 0;
    for(var i=0; i<=student.name.length;i++){
        
        // Insert result into page
        var output = "Total Numeric value of person's name is " + totalNameValue;
        document.getElementById('output').innerText = output;
        totalNameValue = totalNameValue+1;
    }
}