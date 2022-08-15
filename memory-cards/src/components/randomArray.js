export default function randomArray(){
    let taken = [];
    
    function untakenNumber(){
        let randomNumber = Math.floor(Math.random() * 9);
        let status = taken.includes(randomNumber);
    
        if(status === true){
            untakenNumber();
        } else{
            taken.push(randomNumber);
            return randomNumber;
        };
    };

    for(let i = 0; i < 9; i++){
        untakenNumber();
    };

    return taken;
}