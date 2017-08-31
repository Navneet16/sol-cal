function add(){
    
        var num1 = document.getElementById('num1').value;
        var num2=document.getElementById('num2').value;
        if(num1==''|| num2=='')
            {
                alert('Fill the details carefully with valid data')
            }
        else {
        axios.post('/api/add', {
            num_1: num1,
            num_2: num2
        })
         .then(function(response){
            console.log(response);    
            document.getElementById('result').value = response.data.result;
            })
             .catch(function (error) {
                console.log(error);
            });
          }
            document.getElementById('num1').value='';
            document.getElementById('num2').value='';
       
      }

      function div(){
        
            var num1 = document.getElementById('num1').value;
            var num2=document.getElementById('num2').value;
            if(num1==''|| num2=='')
                {
                    alert('Fill the details carefully with valid data')
                }
            else {
            axios.post('/api/div', {
                num_1: num1,
                num_2: num2
            })
            .then(function(response){
                console.log(response);    
                document.getElementById('result').value = response.data.result;
                })
                 .catch(function (error) {
                    console.log(error);
                });
              }
                document.getElementById('num1').value='';
                document.getElementById('num2').value='';
           
          }   
          
          
          function mul(){
            
                var num1 = document.getElementById('num1').value;
                var num2=document.getElementById('num2').value;
                if(num1==''|| num2=='')
                    {
                        alert('Fill the details carefully with valid data')
                    }
                else {
                axios.post('/api/mul', {
                    num_1: num1,
                    num_2: num2
                })
                .then(function(response){
                    console.log(response);    
                    document.getElementById('result').value = response.data.result;
                    })
                     .catch(function (error) {
                        console.log(error);
                    });
                  }
                    document.getElementById('num1').value='';
                    document.getElementById('num2').value='';
               
              }
              
              
              function sub(){
                
                    var num1 = document.getElementById('num1').value;
                    var num2=document.getElementById('num2').value;
                    if(num1==''|| num2=='')
                        {
                            alert('Fill the details carefully with valid data')
                        }
                    else {
                    axios.post('/api/sub', {
                        num_1: num1,
                        num_2: num2
                    })
                    .then(function(response){
                        console.log(response);    
                        document.getElementById('result').value = response.data.result;
                        })
                         .catch(function (error) {
                            console.log(error);
                        });
                      }
                        document.getElementById('num1').value='';
                        document.getElementById('num2').value='';
                   
                  }       
