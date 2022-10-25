/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

 let password;
 //password = "password"; // inte giltigt
 //password = "pa$w@rd";
 // password = "pa$sword"; // giltigt
 // password = "p@ssw%rd"; // giltigt
 //password = "pa$$word"; // giltigt
 //password = "secretpassword"; // inte giltigt
 // password = "secret-password"; // giltigt
 // password = "such-password-much-secure-very-long"; // giltigt
 
 const specialChars = [
     "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
 ];

 const passwordChecker = function() {
    // 0-5
    if(password.length < 6) {
        return false;
        // 6,7 
    } else if(password.length < 8) {
        let occurences = 0; 
        for(let i=0; i < password.length; i++) {
            let passwordChar = password[i];
            let isIncluded = specialChars.includes(passwordChar);
            if (isIncluded) {
                occurences = occurences+1;
            }
        }
        if (occurences < 2) {
            return false;
        } else {
            return true;
        }
// 8 9 10 11 password length
    } else if(password.length < 12 ) {
        let occurences = 0;
        for (let i=0; i < password.length; i++) {
            let passwordChar = password [i];
            let isIncluded = specialChars.includes (passwordChar);
            if (isIncluded) {
                occurences = occurences+1
            }
        }
        if (occurences < 1) {
            return false;
        } else {
            return true;
        }
    }
// med bindestreck 12 13 14 15
// större eller lika med 12, och samtidigt mindre än 16, då körs "else if satsen" 
    else if(password.length >= 12 && password.length < 16 ) {
        let hyphen = password.indexOf("-");
        if(hyphen > -1) {
            return true;
        } else {
            return false;
        }

    }

    return true;

 }


 console.log("function returns: "+ passwordChecker());

 