function isNum(c) {
	"use strict";
	for(let i = 0; i < 10; i++) {
		if(`${c}` === `${i}`) return true;
	}
	return false;
}


function  decToBcd(dec){
	"use strict";
	
	let bcdArr = [0, 0, 0, 0],
	     bcd = '';
	     
	for(let i = 3; i >= 0; i--){
		bcdArr[i] = dec % 2;
		dec = Math.floor(dec/2);
	}
	
	for(let n of bcdArr) {
		bcd += n;
	}
	bcd += ' ';
	return bcd;
}


function power(base, exp) {
	"use strict";
	
	let res = 1;
	for(let i = 0; i < exp; i++) {
		res *= base;
	}
	return res;
}
//console.log(power(6,0));

function  bcdToDec(bcd){
	"use strict";
	
	let n = [];
	for(let i = 3, j = 0; i >= 0; i--,  j++) {
		n.push(bcd[i] * power(2,  j));
	}
	return String(n.reduce((a, b) => a + b));
}
//console.log(bcdToDec("1001"));

function encrypt(string) {
	"use strict";
	let encrypted = '', nstring = '';
	string = `${string} `.toUpperCase();
	
	for(let e of string) {
		if(isNum(e)) nstring += decToBcd(e);
		else nstring += e;
	}

//	console.log(nstring);

	for(let c of nstring) {
		switch(c) {
			case 'A':
			case 'a': 
				encrypted += 'α';
				break;
			case 'B':
			case 'b': 
				encrypted += 'ש';
				break;
			case 'C':
			case 'c': 
				encrypted += 'צ';
				break;
			case 'D':
			case 'd': 
				encrypted += 'θ';
				break;
			case 'E':
			case 'e': 
				encrypted += 'פ';
				break;
			case 'F':
			case 'f': 
				encrypted += 'Ξ';
				break;
			case 'G':
			case 'g': 
				encrypted += 'א';
				break;
			case 'H':
			case 'h': 
				encrypted += 'Λ';
				break;
			case 'I':
			case 'i': 
				encrypted += 'δ';
				break;
			case 'J':
			case 'j': 
				encrypted += 'י';
				break;
			case 'K':
			case 'k': 
				encrypted += '_';
				break;
			case 'L':
			case 'l': 
				encrypted += 'מ';
				break;
			case 'M':
			case 'm': 
				encrypted += '₪';
				break;
			case 'N':
			case 'n': 
				encrypted += 'ς';
				break;
			case 'O':
			case 'o': 
				encrypted += 'π';
				break;
			case 'P':
			case 'p': 
				encrypted += 'μ';
				break;
			case 'Q':
			case 'q': 
				encrypted += 'τ';
				break;
			case 'R':
			case 'r': 
				encrypted += 'λ';
				break;
			case 'S':
			case 's': 
				encrypted += 'ψ';
				break;
			case 'T':
			case 't': 
				encrypted += 'ל';
				break;
			case 'U':
			case 'u': 
				encrypted += 'Σ';
				break;
			case 'V':
			case 'v': 
				encrypted += '¥';
				break;
			case 'W':
			case 'w': 
				encrypted += '$';
				break;
			case 'X':
			case 'x': 
				encrypted += 'Δ';
				break;
			case 'Y':
			case 'y': 
				encrypted += 'ב';
				break;
			case 'Z':
			case 'z': 
				encrypted += 'Ω';
				break;
			case ' ':
				encrypted += ' ';
				break;
			case '0':
				encrypted += 'P';
				break;
			case '1':
				encrypted += 'N';
				break;
			default:
				encrypted += c;
				break;
		}
	}
	return encrypted;
}
console.log(encrypt("?!pardon9 ndlovu12"));


function decrypt(encrypted) {
	"use strict";

	if(encrypted[encrypted.length-1] == 'N' || encrypted[encrypted.length-1] == 'P') encrypted += ' ';

	let plain = '', bcd = '';

	for(let c of encrypted) {
		switch(c) {
			case 'α': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'A';
				break;
			case 'ש':
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'B';
				break;
			case 'צ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'C';
				break;
			case 'θ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'D';
				break;
			case 'פ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'E';
				break;
			case 'Ξ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'F';
				break;
			case 'א': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'G';
				break;
			case 'Λ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'H';
				break;
			case 'δ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'I';
				break;
			case 'י': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'J';
				break;
			case '_': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'K';
				break;
			case 'מ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'L';
				break;
			case '₪': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'M';
				break;
			case 'ς': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'N';
				break;
			case 'π': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'O';
				break;
			case 'μ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'P';
				break;
			case 'τ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'Q';
				break;
			case 'λ':
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'R';
				break;
			case 'ψ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'S';
				break;
			case 'ל': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'T';
				break;
			case 'Σ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'U';
				break;
			case '¥': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'V';
				break;
			case '$': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'W';
				break;
			case 'Δ': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'X';
				break;
			case 'ב': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'Y';
				break;
			case 'Ω': 
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += 'Z';
				break;
			case ' ':
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
					break;
				}
				plain += ' ';
				break;
			case 'P':
				bcd += '0';
				break;
			case 'N':
				bcd += '1';
				break;
			default:
				if(bcd.length > 0) {
					plain += `${bcdToDec(bcd)}`;
					bcd = '';
				}
				plain += c;
				break;
		}
	}
		
	return plain;
}

console.log(decrypt(encrypt("?!pardon9 ndlovu12")));




















