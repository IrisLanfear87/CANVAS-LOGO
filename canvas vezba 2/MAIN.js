var canvas = document.getElementsByTagName('canvas')[0];
var c=canvas.getContext('2d');;
var speedX ;
var speedY ;

c.fillStyle = 'black';
c.fillRect(0,0,canvas.width,canvas.height);

function vrti () {
  c.fillStyle = 'black';
  c.fillRect(0,0,canvas.width,canvas.height);
function sve (a,b) {
  speedX = 2;
  speedY = 2;
  var x = a;   // X I Y SU KOORDINATE POCETKA CRTANJA CETVOROUGLA
  var x1 = a;   //X1 I Y1 SU POMOCNE KOORDINATE JER PROGRAM POBRLJAVI KAD TREBA DA
  var y = a;    // NAPRAVI POMAK AKO KORISTI PROMENNLJIVE X I Y U USLOVNOM POREDNJENJU SA DUZINOM I VISINOM
  var y1 = a;    // JER JE DUZINA = B+X I UVEK VECA OD SAMOG X, ALI KAD SE CRTA LINIJA U NEGATIVNOM SMERU DUZINA MORA DA SE
  var duzina=b+x;  // POREDI S VELICINOM VREDNOSNO MANJOM OD SEBE ALI KOJA NIJE UKLJUCENA U NJENU DEKLARACIJU KAO STO JE TO X
  var visina=b+y;

  var linijaPrva = setInterval(function () {  // setInterval JE POTREBNO ZATO STO SE NA SVAKIH 10 MS CRTA NOVA MALECNA DUZ
          if (x<duzina) {                     // IZ TACKE X DO X+speedX, A U SLEDECEM KORAKU OVO X+speedX POSTAJE POCETNA TACKA
            c.strokeStyle = 'green';
            c.lineWidth = 4;
            c.beginPath();
            c.moveTo(x,y);
            c.lineTo(x+speedX,y);
            c.stroke();
            x+=speedX;
            // console.log('blaaaaa');
        }
        else {
          clearInterval(linijaPrva);
                  var linijaDruga = setInterval(function () {
                          if (y<visina) {
                            c.strokeStyle = 'red';
                            c.lineWidth = 4;
                            c.beginPath();
                            c.moveTo(x,y);
                            c.lineTo(x,y+speedY);
                            c.stroke();
                            y+=speedY;
                            // console.log('eeeeeee');
                        }
                        else {
                          clearInterval(linijaDruga);
                          var linijaTreca = setInterval(function () {
                               if (duzina>=x1) {                       // OVDE MORA (DUZINA > X1) A NE MOZE X JER JE (DUZINA=B+X)
                                    c.strokeStyle = 'blue';           // PA JE DUZINA UVEK VECE OD X I TO ZBUNI PROGRAM
                                    c.lineWidth = 4;                   //ISTO VAZI I ZA Y, ZBOG TOGA SU UVEDENE X1 I Y1
                                    c.beginPath();  	                 //DUZINA I VISINA SU STRANICE PRAVOUGLOG CETVOROUGLA - U OVOM SLUCAJU KVADRATA JER SU JEDNAKE
                                    c.moveTo(duzina,visina);
                                    c.lineTo(duzina-speedX,visina);
                                    c.stroke();
                                    duzina-=speedX;
                                    // console.log(visina);
                                }
                                else {
                                  clearInterval(linijaTreca);
                                  var linijaCetvrta = setInterval(function () {
                                      if (visina>=y1) {
                                            c.strokeStyle = 'yellow';
                                            c.lineWidth = 4;
                                            c.beginPath();
                                            c.moveTo(x1,visina);
                                            c.lineTo(x1,visina-speedY);
                                            c.stroke();
                                            visina-=speedY;
                                            // console.log('iiiiiiiiiiiii');
                                         }
                                        else {
                                          clearInterval(linijaCetvrta);
                                        }
                                    },10);
                                }
                            },10);
                        }
                    },10);
                }
            },10);
        }



  sve(50,200);

  setTimeout(function () {
    sve(200,200);
  },1000);

  setTimeout(function () {
    sve(350,200);
    setTimeout(function () {
      vrti();
    },4500)
  },2000);
}

vrti();
