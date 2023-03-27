function CalculateAge(){
    const userDateinput = document.getElementById('txtDOB').value;  
    console.log(userDateinput);
    
    const birthDate = new Date(userDateinput);
    console.log(" birthDate"+ birthDate);
    
    const difference = Date.now() - birthDate.getTime(); 
    
    const ageDate = new Date(difference); 
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById('calculate').innerHTML = 'You are ' + calculatedAge + ' years old now';
}
