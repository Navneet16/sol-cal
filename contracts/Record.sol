pragma solidity ^0.4.4;
contract Record {

	function add(uint num1,uint num2) returns(uint){
	
	    return num1+num2;
	}
    
    	function div(uint num1,uint num2) returns(uint){
	       if(num1>num2){
	             return num1/num2;
           }
        
          else 
             return num2/num1;
        }

        
    	function mul(uint num1,uint num2) returns(uint){
	
	     return num1*num2;

        }

        
    	function sub(uint num1,uint num2) returns(uint){
	
	    if(num1>num2)
           {
               return num1-num2;
           }
        else
              return num2-num1;
        }
}