import axios from 'axios';
import { url } from 'inspector';


function getdata(url){
				 
    this.$axios.get(url)
    .then((response)=>{			//这里注意this 指向的问题
         if (response.data.status===1){
            
            this.msg=response.data.data
             
         }

    })
    .catch(function(error){
          console.log(erroer);
            
     
    })

    

}