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

       
        if(this.len>11){
            current = this.head;
            this.head = current.next;
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }

    public removeAt(pos) {
        if (pos > -1 && pos < this.len) {
            let current = this.head;
            let previous;
            let index = 0;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current.elem;
        } else {
            return null;
        }
    }

    public dq(){
        let current = this.head;
        this.head = current.next;
    }

    public deq(){
        console.log(this.head.elem);
        let current = this.head;
        this.head = current.next;
        this.len--;
    }

    // public insert(elem, pos) {
    //     if (pos > -1 && pos < this.len) {
    //         let current = this.head;
    //         let index = 0;
    //         let previous;
    //         let node = new Snode(elem);

    //         if (pos === 0) {
    //             node.next = current;
    //             this.head = node;
    //         } else {
    //             while (index++ < pos) {
    //                 previous = current;
    //                 current = current.next;
    //             }
    //             node.next = current;
    //             previous.next = node;
    //         }
    //         this.len++;
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    public toString() {
        var current = this.head;
        var str = '';
        while (current) {
            str += current.elem; //output is undefined
            // str += JSON.stringify(current); 
            // prints out {"next":{"next":{}}}{"next":{}}{}
            current = current.next;
        }
        return str;
    }
}

let t = new LinkedList();
console.log("Enter the element to enqueue or 'quit' to display the queue:");
rl.on('line', function(input){
    if (input.toLowerCase()=='quit'){
        if(t.getLen()==0){
            console.log("there is no element in the queue !");
        }
        if(t.getLen()>12){
            let c =12;
            while(c!=0){
                t.deq();
                c--;
            }
        }
        else{
            while(t.getLen()!=0){
                t.deq();
            }
        }
        rl.close();
    }
    else{
        let a= input;
        t.enq(a);
    }
})