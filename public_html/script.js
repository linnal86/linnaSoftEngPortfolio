var webBody = document.body;

let skillsArray = ["HTML & CSS", "JavaScript", "Java", "Python", "SQL", 
                    "React", "Excel", "Google Suite"]

let skillArrayIcons =["htmlCSS2.svg", "javascript2.svg", "java2.svg", "python.svg", "sql.svg",
                        "react.svg", "excel.svg", "googleSuite.svg"]


let gridTwo = document.querySelector('.grid2');

gridTwo.textContent =""
let newDiv = document.createElement('div')
newDiv.textContent = "Skills"
gridTwo.appendChild(newDiv)


for(let i = 0; i<skillsArray.length; i++){

    let newDiv = document.createElement('div')
    newDiv.textContent = skillsArray[i]
    let skillIcon = new Image();
    skillIcon.src = 'images/'+skillArrayIcons[i];
    skillIcon.style.height = "150px"
    skillIcon.setAttribute('alt', 'Icons made by https://www.flaticon.com/authors/freepik at www.flaticon.com')
    newDiv.appendChild(skillIcon)
    
    gridTwo.appendChild(newDiv)
}

let isDark = false; 
const lightBtn = document.querySelector('.lightButton')
lightBtn.addEventListener('click', ()=>{

    if(isDark){
        webBody.classList.remove('dark-mode')
        webBody.classList.add('light-mode')
        let darkLampSvgString = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lamp-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'
        darkLampSvgString += '<path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3z"/>'
        darkLampSvgString += '<path fill-rule="evenodd" d="M7.5 1l.276-.553a.25.25 0 0 1 .448 0L8.5 1h-1zm-.615 8h2.23C9.968 10.595 11 12.69 11 13.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5c0-.81 1.032-2.905 1.885-4.5z"/>'
        darkLampSvgString += '</svg>'
        lightBtn.innerHTML = darkLampSvgString;
        isDark = false; 

    }else{
        webBody.classList.remove('light-mode')
        webBody.classList.add('dark-mode')

        let lightLampSvgString = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lamp" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'
        lightLampSvgString += ' <path fill-rule="evenodd" d="M13 3H3v4h10V3zM3 2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm4.5-1l.276-.553a.25.25 0 0 1 .448 0L8.5 1h-1zm-.012 9c-.337.646-.677 1.33-.95 1.949-.176.396-.318.75-.413 1.042a3.904 3.904 0 0 0-.102.36c-.01.047-.016.083-.02.11L6 13.5c0 .665.717 1.5 2 1.5s2-.835 2-1.5c0 0 0-.013-.004-.039a1.347 1.347 0 0 0-.02-.11 3.696 3.696 0 0 0-.1-.36 11.747 11.747 0 0 0-.413-1.042A34.827 34.827 0 0 0 8.513 10H7.487zm1.627-1h-2.23C6.032 10.595 5 12.69 5 13.5 5 14.88 6.343 16 8 16s3-1.12 3-2.5c0-.81-1.032-2.905-1.885-4.5z"/>'
        lightLampSvgString += '</svg>'
        lightBtn.innerHTML = lightLampSvgString;
       
        isDark = true;
    }
})

