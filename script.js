document.getElementById('login-button').addEventListener('click', function() {
    // 로그인 버튼이 클릭되면, 로그인 컨테이너를 숨기고 채팅 컨테이너와 입력 컨테이너를 보여줍니다.
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'flex';
    document.getElementById('input-container').style.display = 'flex';
});

document.getElementById('send-button').addEventListener('click', function() {
    // "Send" 버튼이 클릭되면, 사용자 메시지를 채팅 컨테이너에 추가합니다.
    var message = document.getElementById('message-input').value;
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user-message');
    messageElement.textContent = message;
    document.getElementById('chat-container').appendChild(messageElement);
    
    // 입력 필드를 비웁니다.
    document.getElementById('message-input').value = '';

    // 2초 후에 로봇의 메시지를 추가합니다.
    setTimeout(function() {
        var botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message', 'bot-message');
        botMessageElement.textContent = 'KB : [fox, order, mammalia]';
        document.getElementById('chat-container').appendChild(botMessageElement);
    }, 3000);
});

document.getElementById('file-input').addEventListener('change', function(e) {
    // 파일 입력이 변경되면, 이미지를 채팅 컨테이너에 추가합니다.
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        var img = document.createElement('img');
        img.src = reader.result;
        document.getElementById('chat-container').appendChild(img);
    }
    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('login-button').addEventListener('click', function() {
    // 로그인 버튼이 클릭되면, 로그인 컨테이너를 숨기고 채팅 컨테이너와 입력 컨테이너를 보여줍니다.
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'flex';
    document.getElementById('input-container').style.display = 'flex';
});

document.getElementById('signup-link').addEventListener('click', function() {
    // "Sign Up" 링크가 클릭되면, 로그인 컨테이너를 숨기고 회원가입 컨테이너를 보여줍니다.
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'flex';
});

document.getElementById('signup-button').addEventListener('click', function() {
    // "Sign Up" 버튼이 클릭되면, 회원가입 컨테이너를 숨기고 로그인 컨테이너를 보여줍니다.
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
});

// 이전의 'send-button'과 'file-input' 이벤트 리스너 코드...

document.getElementById('login-button').addEventListener('click', function() {
    // 로그인 버튼이 클릭되면, 로그인 컨테이너를 숨기고 채팅 컨테이너와 입력 컨테이너를 보여줍니다.
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'flex';
    document.getElementById('input-container').style.display = 'flex';

    // 로그인 후 채팅창에 로봇의 시작 메세지를 추가합니다.
    var startMessage = 'Hello! I am a ChatBot. Our service provides answers to various topics using visual-based question-answering with knowledge graphs.<br><br>' +
        'When users enter a topic or question, we analyze and process relevant images and graphs. We utilize image recognition technology and leverage knowledge graphs to solve problems and provide optimal answers.<br><br>' +
        'Users can add files to include desired images or visual materials. These submitted files can be utilized as data for visual-based question-answering.<br><br>' +
        'Add files for the topics you\'re curious about and experience more accurate and effective answers through visual-based question-answering and the utilization of knowledge graphs. We are always here to assist you to the best of our abilities. Feel free to ask any questions!';
var startMessageElement = document.createElement('div');
startMessageElement.classList.add('message', 'bot-message');
startMessageElement.innerHTML = startMessage; // innerHTML을 사용하여 HTML 태그를 해석하도록 설정
document.getElementById('chat-container').appendChild(startMessageElement);
});

// 이전의 'signup-link', 'signup-button', 'send-button', 'file-input' 이벤트 리스너 코드...

document.getElementById('send-button').addEventListener('click', function() {
    var userMessage = document.getElementById('message-input').value;

    // 사용자 메시지를 채팅 컨테이너에 추가
    var userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.textContent = userMessage;
    document.getElementById('chat-container').appendChild(userMessageElement);

    // 입력 필드를 비움
    document.getElementById('message-input').value = '';

    // 2초 후에 로봇의 답변을 채팅 컨테이너에 추가
    setTimeout(function() {
        var botMessage = 'Answer: fox'; // 답변이 항상 'Answer: fox'인 경우
        var botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message', 'bot-message');
        
        // 이미지를 담을 img 태그를 생성
        var botImage = document.createElement('img');
        botImage.src = 'answer.jpg'; // 프로젝트의 루트 디렉토리에 있는 'answer.jpg' 이미지
        botImage.alt = 'Fox Image'; // 대체 텍스트
        botImage.classList.add('bot-image');

        botMessageElement.appendChild(botImage); // 메시지 div에 이미지 추가
        botMessageElement.appendChild(document.createTextNode(botMessage));
        
        document.getElementById('chat-container').appendChild(botMessageElement);
    }, 6000);
});
