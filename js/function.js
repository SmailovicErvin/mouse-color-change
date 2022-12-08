//de cursor positie zal weergeven worden in de console
document.onmousemove=function(e){
    console.log(e);
    //met dit kan je de waardes van de x-axis en y-axis zien 
    //uit deze event e-->clientX & clientY
    let x=e.clientX;
    let y=e.clientY;
    //Opmerking:: in het RGB model in
    //css: Elk parameter(rood,groen,blauw) bepalen de 
    //intensiteit van de kleuren tussen 0 en 255.
    //Bijvoorbeeld, RGB(255, 0, 0) weergeeft de kleur rood
    //omdat rood op de hoogste waarde(255) geplaatst is en de andere waardes zijn op 0.


//om de kleur zwart te weergeven, moet je alle kleuren parameters naar 0 zetten,
//zo dus: RGB(0, 0, 0)

//om de kleur wit te weergeven, moet je alle kleuren parameters naar 255 zetten,
//zo dus: RGB(255, 255, 255 )
document.body.style.backgroundColor=`rgb(${x}, ${y}, ${(x+y)/10})`;

// met deze code worden de waardes van de RGB op de UI(User Interface) weergeven
dispBoard.innerHTML=`R-${x} || G-${y} || B-${(x+y)}`;
}