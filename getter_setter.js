class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    get password(){
        return `${this._password} Namdu`
    }

    set password(value){
        this._password = value;
    }
}

const Rcb = new User("RCB","EE SAALA CUP");
console.log(Rcb.password);


function newUser(user_name,pass_word){
    this._user_name = user_name;
    this._pass_word = pass_word

    Object.defineProperty(this,'pass_word',{
        get: function(){
            return this._pass_word.toUpperCase();
        },
        set : function(value){
            this._pass_word = value;
        }
    })
}

const random = new newUser("random","abc");
console.log(random.pass_word);
