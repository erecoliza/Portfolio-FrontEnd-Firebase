
export function miLogin() {
    localStorage.setItem('token','eduardo123456');         
  }
  
export function miLogout() {
    localStorage.removeItem('token');    
  }

 export function isLogin(){
    let tokenValor = localStorage.getItem('token'); 
    return tokenValor == 'eduardo123456';     
  }





