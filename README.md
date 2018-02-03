# Marketplace-test


## Synopsis

	Evaluacion para PideloRapido developer Senior NodeJs and Angular2, para esta prueba se 
	realiza carpeta donde ira codigo de RestFul y Codigo De App el nombre la app se creo con ionic2 y con Angular2
	
## Instalacion

	Para su instalacion se necesito de los siguientes requerimientos:
	
	System:

    	Android SDK Tools : 26.1.1
    	ios-deploy        : 1.9.2
    	Node              : v6.11.3
    	npm               : 5.6.0
    	OS                : macOS Sierra
    	Xcode             : Xcode 9.2 Build version 9C40b
	ionic 		  : 3.19.1
	Ionic Framework    : ionic-angular 3.9.2
	cordova (Cordova CLI) : 7.1.0

	para instalar dependencias y requerimientos ejecutar el comando npm install

## Informacion adicional 





## Deploy

	Primero ejecutar restful con el comando node server.js
	Segundo ejecutar comando para test de ionic serve ionic
	Tercero si se desea realizar pruebas en Android se realizan los siguientes pasos:

		ionic cordova platform add android
		ionic cordova build android
		ionic cordova run android
	
	Si todo sale bien nos creara un file en la carpeta de platforms 
	dentro otra directorio llamado android dentro de android build y 
	buscar debug/out/apk/android-debug.apk

	Si por alguna razon falla se debe de revisar version de Gradle,
	en la consola de Android Studio y buscar solucion a lo que devuelva consola de android.



