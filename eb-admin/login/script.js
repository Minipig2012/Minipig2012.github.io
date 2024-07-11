function validateLogin() {  
    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  
    const messageElement = document.getElementById('message');  
  
    messageElement.classList.remove('visible');  
  
    if (username === 'Zhu' && password === 'adminzhu123') {  
        // 登录成功，可以重定向到另一个页面或进行其他操作  
        alert('登录成功！即将跳转...');  
        // window.location.href = 'home.html'; // 示例：重定向到另一个页面  
        window.location.href = '../zhu/BlogBoard.html';
    } else {  
        if (username === 'System32-edge' && password === 'zxnmilk') {  
            // 登录成功，可以重定向到另一个页面或进行其他操作  
            alert('登录成功！即将跳转...');  
            // window.location.href = 'home.html'; // 示例：重定向到另一个页面  
            window.location.href = '../system32-edge/BlogBoard.html';
        } else {  
            messageElement.textContent = '用户名或密码错误！';  
            messageElement.classList.add('visible');  
        }  
    }  
}