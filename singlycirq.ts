let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

class Snode {
    elem;
    next;

    constructor(elem) {
        this.elem = elem;
        this.next = null;
    }
}

class LinkedList {
    private head = null;
    private len = 0;

    public getLen(){
        return this.len;
    }
    
    public enq(elem) {
        let node = new Snode(elem);
        let current;
        if (this.head === null) {
            this.head = node;
            this.len++;
        }
        else if (this.len < 12) {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.len++;
        }
        else {
            this.head=this.head.next;
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    public deq(){
        console.log(this.head.elem);
        let current = this.head;
        this.head = current.next;
        this.len--;
    }
}

let t = new LinkedList();
console.log("Enter the element to enqueue or 'quit' to display the queue:");
rl.on('line', function(input){
    if (input.toLowerCase()=='quit'){
        if(t.getLen()==0){
            console.log("there is no element in the queue !");
        }
        else{
            while(t.getLen()>0) t.deq();
        }
        rl.close();
    }
    else{
        let a= input;
        t.enq(a);
    }
})