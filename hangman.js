// split()
// toLowerCase()

class Hangman{
// Constructor
    constructor(word,guessesLift){
        this.word = word.toLowerCase().split('')
        this.guessesLift = guessesLift
        this.guessedList = []
        this.status = 'Playing'
    }

//Prototypes
    // A Status message
    get statusMessage(){
        if(this.status === 'Playing'){
            return `Gusses laft : ${this.guessesLift}`
        }else if(this.status === 'Failed'){
            return `Nice try! The woed wase "${this.word.join('')}"`
        }else{
            return 'Great work!, You gussed the word'
        }
    }

    // Calculat status of the game
    calculatStatus(){
    // to check if the game is finished || not
    const finished = this.word.every((letter) => this.guessedList.includes(letter) || letter === ' ')

    // to site the new status
        if(this.guessesLift <= 0){
            this.status = 'Failed'
        }else if(finished) {
            this.status = 'Finish'
        }else{
            this.status = 'Playing'
        }
    }

    // Show * in the lift chsr & get puzzle
    get puzzle(){
        let puzzle = ''
    
        this.word.forEach( (letter) => {
            if(this.guessedList.includes(letter) || letter === ' '){
                puzzle += letter
            }else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    // make a guess 
    makeGuesse(cher){
        cher = cher.toLowerCase()
        const isUnique = !this.guessedList.includes(cher)
        const isBsdGuesse = !this.word.includes(cher)
        
        if(this.status !== 'Playing'){
            return
        }
        
        if(isUnique){
            this.guessedList.push(cher)
        }
    
        if(isUnique && isBsdGuesse){
            this.guessesLift -= 1
        }
        this.calculatStatus()
    }
}