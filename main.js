
//yooooo 


// NE PAS MODIFIER : Déclaration de variables utiles : varaibles qui peuvent aider à la résolution des exercices, mais qui ne sont pas forcément indispensables.
alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
vigenere={
	"A":{"A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z"},
	"B":{"A":"B","B":"C","C":"D","D":"E","E":"F","F":"G","G":"H","H":"I","I":"J","J":"K","K":"L","L":"M","M":"N","N":"O","O":"P","P":"Q","Q":"R","R":"S","S":"T","T":"U","U":"V","V":"W","W":"X","X":"Y","Y":"Z","Z":"A"},
	"C":{"A":"C","B":"D","C":"E","D":"F","E":"G","F":"H","G":"I","H":"J","I":"K","J":"L","K":"M","L":"N","M":"O","N":"P","O":"Q","P":"R","Q":"S","R":"T","S":"U","T":"V","U":"W","V":"X","W":"Y","X":"Z","Y":"A","Z":"B"},
	"D":{"A":"D","B":"E","C":"F","D":"G","E":"H","F":"I","G":"J","H":"K","I":"L","J":"M","K":"N","L":"O","M":"P","N":"Q","O":"R","P":"S","Q":"T","R":"U","S":"V","T":"W","U":"X","V":"Y","W":"Z","X":"A","Y":"B","Z":"C"},
	"E":{"A":"E","B":"F","C":"G","D":"H","E":"I","F":"J","G":"K","H":"L","I":"M","J":"N","K":"O","L":"P","M":"Q","N":"R","O":"S","P":"T","Q":"U","R":"V","S":"W","T":"X","U":"Y","V":"Z","W":"A","X":"B","Y":"C","Z":"D"},
	"F":{"A":"F","B":"G","C":"H","D":"I","E":"J","F":"K","G":"L","H":"M","I":"N","J":"O","K":"P","L":"Q","M":"R","N":"S","O":"T","P":"U","Q":"V","R":"W","S":"X","T":"Y","U":"Z","V":"A","W":"B","X":"C","Y":"D","Z":"E"},
	"G":{"A":"G","B":"H","C":"I","D":"J","E":"K","F":"L","G":"M","H":"N","I":"O","J":"P","K":"Q","L":"R","M":"S","N":"T","O":"U","P":"V","Q":"W","R":"X","S":"Y","T":"Z","U":"A","V":"B","W":"C","X":"D","Y":"E","Z":"F"},
	"H":{"A":"H","B":"I","C":"J","D":"K","E":"L","F":"M","G":"N","H":"O","I":"P","J":"Q","K":"R","L":"S","M":"T","N":"U","O":"V","P":"W","Q":"X","R":"Y","S":"Z","T":"A","U":"B","V":"C","W":"D","X":"E","Y":"F","Z":"G"},
	"I":{"A":"I","B":"J","C":"K","D":"L","E":"M","F":"N","G":"O","H":"P","I":"Q","J":"R","K":"S","L":"T","M":"U","N":"V","O":"W","P":"X","Q":"Y","R":"Z","S":"A","T":"B","U":"C","V":"D","W":"E","X":"F","Y":"G","Z":"H"},
	"J":{"A":"J","B":"K","C":"L","D":"M","E":"N","F":"O","G":"P","H":"Q","I":"R","J":"S","K":"T","L":"U","M":"V","N":"W","O":"X","P":"Y","Q":"Z","R":"A","S":"B","T":"C","U":"D","V":"E","W":"F","X":"G","Y":"H","Z":"I"},
	"K":{"A":"K","B":"L","C":"M","D":"N","E":"O","F":"P","G":"Q","H":"R","I":"S","J":"T","K":"U","L":"V","M":"W","N":"X","O":"Y","P":"Z","Q":"A","R":"B","S":"C","T":"D","U":"E","V":"F","W":"G","X":"H","Y":"I","Z":"J"},
	"L":{"A":"L","B":"M","C":"N","D":"O","E":"P","F":"Q","G":"R","H":"S","I":"T","J":"U","K":"V","L":"W","M":"X","N":"Y","O":"Z","P":"A","Q":"B","R":"C","S":"D","T":"E","U":"F","V":"G","W":"H","X":"I","Y":"J","Z":"K"},
	"M":{"A":"M","B":"N","C":"O","D":"P","E":"Q","F":"R","G":"S","H":"T","I":"U","J":"V","K":"W","L":"X","M":"Y","N":"Z","O":"A","P":"B","Q":"C","R":"D","S":"E","T":"F","U":"G","V":"H","W":"I","X":"J","Y":"K","Z":"L"},
	"N":{"A":"N","B":"O","C":"P","D":"Q","E":"R","F":"S","G":"T","H":"U","I":"V","J":"W","K":"X","L":"Y","M":"Z","N":"A","O":"B","P":"C","Q":"D","R":"E","S":"F","T":"G","U":"H","V":"I","W":"J","X":"K","Y":"L","Z":"M"},
	"O":{"A":"O","B":"P","C":"Q","D":"R","E":"S","F":"T","G":"U","H":"V","I":"W","J":"X","K":"Y","L":"Z","M":"A","N":"B","O":"C","P":"D","Q":"E","R":"F","S":"G","T":"H","U":"I","V":"J","W":"K","X":"L","Y":"M","Z":"N"},
	"P":{"A":"P","B":"Q","C":"R","D":"S","E":"T","F":"U","G":"V","H":"W","I":"X","J":"Y","K":"Z","L":"A","M":"B","N":"C","O":"D","P":"E","Q":"F","R":"G","S":"H","T":"I","U":"J","V":"K","W":"L","X":"M","Y":"N","Z":"O"},
	"Q":{"A":"Q","B":"R","C":"S","D":"T","E":"U","F":"V","G":"W","H":"X","I":"Y","J":"Z","K":"A","L":"B","M":"C","N":"D","O":"E","P":"F","Q":"G","R":"H","S":"I","T":"J","U":"K","V":"L","W":"M","X":"N","Y":"O","Z":"P"},
	"R":{"A":"R","B":"S","C":"T","D":"U","E":"V","F":"W","G":"X","H":"Y","I":"Z","J":"A","K":"B","L":"C","M":"D","N":"E","O":"F","P":"G","Q":"H","R":"I","S":"J","T":"K","U":"L","V":"M","W":"N","X":"O","Y":"P","Z":"Q"},
	"S":{"A":"S","B":"T","C":"U","D":"V","E":"W","F":"X","G":"Y","H":"Z","I":"A","J":"B","K":"C","L":"D","M":"E","N":"F","O":"G","P":"H","Q":"I","R":"J","S":"K","T":"L","U":"M","V":"N","W":"O","X":"P","Y":"Q","Z":"R"},
	"T":{"A":"T","B":"U","C":"V","D":"W","E":"X","F":"Y","G":"Z","H":"A","I":"B","J":"C","K":"D","L":"E","M":"F","N":"G","O":"H","P":"I","Q":"J","R":"K","S":"L","T":"M","U":"N","V":"O","W":"P","X":"Q","Y":"R","Z":"S"},
	"U":{"A":"U","B":"V","C":"W","D":"X","E":"Y","F":"Z","G":"A","H":"B","I":"C","J":"D","K":"E","L":"F","M":"G","N":"H","O":"I","P":"J","Q":"K","R":"L","S":"M","T":"N","U":"O","V":"P","W":"Q","X":"R","Y":"S","Z":"T"},
	"V":{"A":"V","B":"W","C":"X","D":"Y","E":"Z","F":"A","G":"B","H":"C","I":"D","J":"E","K":"F","L":"G","M":"H","N":"I","O":"J","P":"K","Q":"L","R":"M","S":"N","T":"O","U":"P","V":"Q","W":"R","X":"S","Y":"T","Z":"U"},
	"W":{"A":"W","B":"X","C":"Y","D":"Z","E":"A","F":"B","G":"C","H":"D","I":"E","J":"F","K":"G","L":"H","M":"I","N":"J","O":"K","P":"L","Q":"M","R":"N","S":"O","T":"P","U":"Q","V":"R","W":"S","X":"T","Y":"U","Z":"V"},
	"X":{"A":"X","B":"Y","C":"Z","D":"A","E":"B","F":"C","G":"D","H":"E","I":"F","J":"G","K":"H","L":"I","M":"J","N":"K","O":"L","P":"M","Q":"N","R":"O","S":"P","T":"Q","U":"R","V":"S","W":"T","X":"U","Y":"V","Z":"W"},
	"Y":{"A":"Y","B":"Z","C":"A","D":"B","E":"C","F":"D","G":"E","H":"F","I":"G","J":"H","K":"I","L":"J","M":"K","N":"L","O":"M","P":"N","Q":"O","R":"P","S":"Q","T":"R","U":"S","V":"T","W":"U","X":"V","Y":"W","Z":"X"},
	"Z":{"A":"Z","B":"A","C":"B","D":"C","E":"D","F":"E","G":"F","H":"G","I":"H","J":"I","K":"J","L":"K","M":"L","N":"M","O":"N","P":"O","Q":"P","R":"Q","S":"R","T":"S","U":"T","V":"U","W":"V","X":"W","Y":"X","Z":"Y"}
};
let adfgvx={
	"a":{"a": "B","d": "Y","f": "4","g": "L","v": "E","x": "S"},
	"d":{"a": "Z","d": "X","f": "R","g": "C","v": "H","x": "0"},
	"f":{"a": "F","d": "O","f": "A","g": "M","v": "8","x": "7"},
	"g":{"a": "3","d": "I","f": "T","g": "G","v": "U","x": "K"},
	"v":{"a": "P","d": "D","f": "6","g": "2","v": "N","x": "V"},
	"x":{"a": "1","d": "5","f": "J","g": "9","v": "W","x": "Q"}
};
// Fin de déclaration des variables utiles


afficher("<h1>CHALLENGE [Cryptographie]</h1>");
// OBJECTIF : Déchiffrer les messages codés (variables 'code') dans chacun des exercices suivants. Chaque exercice donne une indication pour l'exercice suivant.

// ---- EXERCICE 1 --------------------------------------------------------------------------------------
afficher("<h2>#1 - MAMMIFERE MARIN <small>aux grandes dents</small></h2>");
// Message chiffré
code=["-.-.",".-",","," ","-.-.","'",".","...","-"," ","..-.",".-","..","-"," ","!"," ",".-..","'",".","-..-",".",".-.","-.-.","..","-.-.","."," ","...","..-","..","...-",".-","-.","-"," ",".","...","-"," ",".-..","."," ","\" ","-.-.","---","-..","."," ","-..","."," ","-.-.",".","...",".-",".-.","\" ",","," ",".-..",".-"," ","-.-.",".-..","."," ","..-","-","..",".-..","..","...",".","."," ",".","...","-"," ",".-..","."," ",".-.",".","...","..-",".-..","-",".-","-"," ","-..","."," ",".-..",".-"," ","-..","..","...-","..","...","..","---","-."," ","-..","."," ","--.-","..-",".-",".-.",".-","-.","-","."," ","-..",".","..-","-..-"," ",".--.",".-",".-."," ","...","..","-..-"," ","(","---","..-","..",","," ",".---","."," ","...",".-","..","...",","," ","-.-.","'",".","...","-"," ","-..",".","..."," ","--",".-","-","....","...",","," ","--",".-","..","..."," ",".---","."," ","...-","---","..-",".-..",".-","..","..."," ",".--.",".-..",".-","-.-.",".",".-."," ","..-","-."," ","\" ","--.-","..-",".-","-.",".-.",".-","-.","-","."," ","-..",".","..-","-..-","\" "," ","--.-","..-",".",".-..","--.-","..-","."," ",".--.",".-",".-.","-"," ",".","-",","," ","-..","."," ","-","---","..-","-","."," ","--",".-","-.","..",".",".-.",".",","," ",".-..",".-"," ","-.-.",".-",".-..","-.-.","..-",".-..",".-","-",".-.","..","-.-.","."," ",".","...","-"," ",".-","..-","-","---",".-.","..","...",".",".",")"];
afficher(code);
// Code de l'exercice

let i = 0;
let relation =[]
while(i<= taille(alphabet)){
	relation[morse[i]]=alphabet[i]	
i++;
}
i=0
let y=0
let check=false
let solution=""
while(i<=taille(code)){
	while(y<=25){
if (code[i]==morse[y]) {
check=true;
break;
}
check=false;
		y++
	}
if (check) {
	solution+=relation[code[i]];
}else{
	solution+=code[i]; 	
}
++i	
y=0
}
afficher(solution)
// ------------------------------------------------------------------------------------------------------

// ---- EXERCICE 2 --------------------------------------------------------------------------------------
afficher("<h2>#2 - AVE... <small>morituri te salutant</small></h2> ");
// Message chiffré
code="IYHCV ! WHZ JVU, JL QBSLZ... VU JVTWSPXBL BU WLB JH WVBY S'LELYJPJL ZBPCHUA, SH ZBIZAPABAPVU WVSFHSWOHILAPXBL, HCLJ SH JSL : ZLWA XBHAYL ULBM (LU JOPMMYL, OLPU)";
afficher(code);
// Code de l'exercice
solution=""
i=0
while(i<=taille(code)){
	while(y<=26){
if (code[i]==alphabet[y]) {
check=true;

break;
}
check=false;
		y++
	}
if (check) {
	y=y-7
	if (y<0) {y=26+y}
	solution+=alphabet[y];
}else{
	solution+=code[i]; 	
}
++i	
y=0
}
afficher(solution)
// ------------------------------------------------------------------------------------------------------

// ---- EXERCICE 3 --------------------------------------------------------------------------------------
afficher("<h2>#3 - SUBSTITUTION POLYALPHABETIQUE <small>version Wikipédia</small></h2>");
// Message chiffré
code="IMNU, TERUXNUEWA ZBI SE USCPSW HN HNJEUHKN IBA JZWRTMULI, SW TNBX WEBZIA EDE LOSBLW ZIAPIDZIB. UH LSI WSDY U'IGLVLPGN WDPZJUX, PN \"LOMOMVN HN ZRNIWLVN\", LWC : BWKACYLE";
afficher(code);
// Code de l'exercice




// ------------------------------------------------------------------------------------------------------

// ---- EXERCICE 4 --------------------------------------------------------------------------------------
afficher("<h2>#4 - A L'AISE <small>...</small></h2>");
// Message chiffré
code="VAFG HDYE ! GSJL ZDR, CU XBBR SIJU MO LGTGLY WU WCBM QOW DX ADHE U WUX AGECEW... BEJTD, LY FPF BJ TRIUITGC ELAGSBRWQE XW DAGUJRYEFGR TWT FW \"DAGUJRY SEYE(K)B\" (SUFT E'CIEPY VF MPPRSJGTBRXSN, DW O'TG EES YM MX RTQPM VF E'GCXELYSXP, SISIDF. FYXW BIF, EN ADYP, W'WTM NAYS MANIJT)";
afficher(code);
// Code de l'exercice




// ------------------------------------------------------------------------------------------------------

// ---- EXERCICE 5 --------------------------------------------------------------------------------------
afficher("<h2>#5 - NEBEL <small>vs. Painvin</small></h2>");
// Message chiffré
code="ffdffa, fgavdfvdav... xfav vvav vaavvvaxffgdax vaffax xxgvav gfgv ad ffdfdfgdvxavdfffgdax, xfav vv'ffgd vaffax vadfavvxgv vdav fgavaxaxffggav vdav faavaggddggdgfffgfgdfdvvax. gfgv vaavgvdd gffdgvxffdgvdfax fg'avvvvxfdadavdf gvvv fgffgdag vafdgvdf gfav vaagffgdvvvddfav... ;-)";
afficher(code);
// Code de l'exercice




// ------------------------------------------------------------------------------------------------------
















































































































































































































































































































































































































// Quoi ? Tu en veux encore ???



















































































































































































































































































































































































































































































































// Non, mais y'a plus rien, hein


















































































































































































































































































































































































































































































































//Toujours rien...


















































































































































































































































































































































































































































































































//                ¯\_(ツ)_/¯ 

















































































































































































































































































































































































































































































































// Allez... bisous !