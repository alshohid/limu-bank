




const  seminarLibrary= {
    id:24,dept:"CSE",book:[10,20,30,40],onlineJudge:["uri","uva","code forces","leet code"],
    studentFund:2000,
    programming:function(){
        console.log(this.dept, this.id);
    },
    networking:function(){

    },
  
    fine:function(tk, tax,tips){
        this.fineTaka =this.studentFund - tk -tax -tips;
        return this.fineTaka;
    }
}

const rakibfine = {
    studentFund:4000
}
 const result = seminarLibrary.fine.call(rakibfine,100,50,50);
  console.log(result);
  
