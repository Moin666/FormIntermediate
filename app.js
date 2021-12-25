var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var fatherName = document.getElementById("fatherName");
var fatherNameLast = document.getElementById("fatherNameLast");
var dataOFBirth = document.getElementById("dataOFBirth");
var country = document.getElementById("country");
var Male = document.getElementById("Male");
var Female = document.getElementById("Female");
var Postal = document.getElementById("Postal");
var Permanent = document.getElementById("Permanent");


var Phone = document.getElementById("Phone");
var Mobile = document.getElementById("Mobile");
var Mark = document.getElementById("Mark");
var postalCode = document.getElementById("postalCode");

var cnicNumber = document.querySelectorAll(".cnicField");

var mus = document.getElementById("muslim")
var nonMus = document.getElementById("nonMuslim")

var Photo = document.getElementById("Photo");
var main = document.getElementById("mainDiv");
var tableDiv = document.getElementById("tableDiv");



var firstnamehidden = document.getElementById("firstnamehidden")
var lastNamehidden = document.getElementById("lastNamehidden")
var fatherNamehidden = document.getElementById("fatherNamehidden")
var fatherNameLasthidden = document.getElementById("fatherLastNamehidden");
var dataOFBirthhidden = document.getElementById("dataOFBirthhidden");
var countryhidden = document.getElementById("nationalityhidden")
var Malehidden = document.getElementById("Malehidden")
var Femalehidden = document.getElementById("Femalehidden")
var Postalhidden = document.getElementById("Postalhidden")
var Permanehidden = document.getElementById("Permanehidden")
var Phonehidden = document.getElementById("Phonehidden")
var Mobilehidden = document.getElementById("Mobilehidden")
var Markhidden = document.getElementById("Markhidden")
var postalCodehidden = document.getElementById("postalCodehidden")

var cnicHidden = document.getElementById("cnichidden")

var religionHidden = document.getElementById("religionHidden")
var Photohidden = document.getElementById("Photohidden")


var hiddenSection = document.getElementById("hiddenSection");
var dislaysection = document.getElementById("dislaysection");
var dislaysection2 = document.getElementById("dislaysection2");




function dataSubmit(){

    firstnamehidden.innerHTML = firstName.value;
    lastNamehidden.innerHTML = lastName.value;
    
    fatherNamehidden.innerHTML = fatherName.value;
    fatherNameLasthidden.innerHTML = fatherNameLast.value;
    dataOFBirthhidden.innerHTML = dataOFBirth.value;
    countryhidden.innerHTML = country.value;
    maleFemaleDetector()
    Postalhidden.innerHTML = Postal.value;

    Permanehidden.innerHTML = Permanent.value;
    Phonehidden.innerHTML = Phone.value;
    console.log( Phonehidden.innerHTML)
    Mobilehidden.innerHTML = Mobile.value;
    Markhidden.innerHTML = Mark.value;
    postalCodehidden.innerHTML = postalCode.value;
    cnicDisplay()
    muslimNonMuslimDetector()


    lastNamehidden.innerHTML = lastName.value;
    lastNamehidden.innerHTML = lastName.value;
    lastNamehidden.innerHTML = lastName.value;
    lastNamehidden.innerHTML = lastName.value;


    dislaysection.style.display = "none"
    dislaysection2.style.display = "none"
    hiddenSection.style.display = "block"

}
function maleFemaleDetector(){
    console.log()
    if(Male.checked){
        Malehidden.innerHTML = "Male"
        console.log("male")
    }
    else if(Female.checked ){
        Malehidden.innerHTML = "Female";
        console.log("female")
    }
}

function cnicDisplay(){
    var data = ""
    var CnicData =""
    cnicNumber.forEach(function(num){
        data = data + num.value;
    })
    
    CnicData = data.slice(0,5) + "-" + data.slice(5,12) + "-" + data.slice(12) 
    cnicHidden.innerHTML = CnicData;
    console.log(CnicData)
}
function muslimNonMuslimDetector(){
    if(mus.checked){
        religionHidden.innerHTML = "Muslim"
        console.log("male")
    }
    else if(nonMus.checked ){
        religionHidden.innerHTML = "Non Muslim";
        console.log("female")
    }
}