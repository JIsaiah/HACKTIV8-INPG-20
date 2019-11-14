//PSEUDOCODE PRACTICE//
//CONDITIONAL EXERCISE//
STORE "maxspeed" to 20
STORE "passenger" to 3

    IF "passenger" = 0
        DISPLAY "maxspeed"
    ELSE
        IF "passenger" > 2
            DISPLAY "maxspeed" - 5
        ELSE
            IF "passenger" = 4
                DISPLAY "maxspeed" - 7
            ELSE
                IF "passenger" > 4
                    DISPLAY "Becak does not fit"
                ELSE 
                    DISPLAY "maxspeed" - 2

//ACTUAL JAVASCRIPT FOR CONDITIONAL EXERCISE//
//Becak Problem//
var passenger = 3;
switch(passenger){
  case 0: {console.log(20-0,"km/jam");break;}
  case 1: {console.log(20-1,"km/jam");break;}
  case 2: {console.log(20-2,"km/jam");break;}
  case 3: {console.log(20-5,"km/jam");break;}
  case 4: {console.log(20-7,"km/jam");break;}
  default: {console.log("Becak does not fit");}
}

//LOOPING EXERCISE//
STORE "number"  with 1

WHILE "number" > 11
    ADD "number" by 1

IF "number" = 10
    DISPLAY "number"
ELSE
    ADD "number" by 1