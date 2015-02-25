#include <SoftwareSerial.h>


SoftwareSerial mySerial = SoftwareSerial(2, 3);
int fadePin = 9; 
int fadeRate = 0;


void setup() {
  pinMode(13, OUTPUT);
  Serial.begin(115200);
  //Serial.println("Goodnight moon!");
  // set the data rate for the SoftwareSerial port
  mySerial.begin(115200);
  mySerial.println("Hello, world?");
}



void loop() // run over and over again
{
  int inByte;
  if (mySerial.available()) {
    inByte = mySerial.read();
    if(inByte == 0){
       digitalWrite(13,HIGH);
       //ledFadeToBeat();
       delay(200);
       digitalWrite(13,LOW);
    }
  }
  
//  if (Serial.available()) {
//    mySerial.print(Serial.read());
//  }
  delay(100);
  
}

//void ledFadeToBeat(){
//    fadeRate -= 10;                         //  set LED fade value
//    fadeRate = constrain(fadeRate,0,255);   //  keep LED fade value from going into negative numbers!
//    analogWrite(fadePin,fadeRate);          //  fade LED
//}
