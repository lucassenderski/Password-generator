export  default function generatePassword() {
    let password :string = '';
    let characters: string ='LucasDaianeRomeo25311510072024';
    let passwordLength: number = 8;
    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
       Math.floor(Math.random()*characters.length)
    }

    return password}