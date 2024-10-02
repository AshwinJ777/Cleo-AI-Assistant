let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice');


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 5;
    text_speak.lang = 'en-GB';
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak('Good Morning');
    } else if (hour >= 12 && hour < 17) {
        speak('Good Afternoon');
    } else {
        speak('Good Evening');
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let spReco = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!spReco) {
    console.error("Speech recognition not supported in this browser.");
} else {
    let recognition = new spReco();

    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
    
        console.log("Recognized text:", transcript); 
        content.innerText = transcript; 
        takecommand(transcript)
    };
    

    btn.addEventListener("click", () => {
        recognition.start();
        btn.style.display="none"
        voice.style.display="block"
    });
}

function  takecommand(text) {
    btn.style.display="flex"
    voice.style.display="none"
    if (text.toLowerCase().includes('hello')||  text.toLowerCase().includes('hey')) {

        speak('Hello, How can I assist you today?');
    }
    else if (text.toLowerCase().includes('who are you')){
        speak('I am a virtual assistant, created by Ashwin J Menon')
    }
    else if (text.toLowerCase().includes('open youtube')){
        speak('Opening Youtube for you...')
        window.open('https://www.youtube.com', '_blank');
    }
    else if (text.toLowerCase().includes('open insta')){
        speak('Opening Instagram for you...')
        window.open('https://www.instagram.com', '_blank');
    }
    else if (text.toLowerCase().includes('open facebook')){
        speak('Opening Facebook for you...')
        window.open('https://www.facebook.com', '_blank');
    }
    else if (text.toLowerCase().includes('open wiki')){
        speak('Opening Wikipedia for you...')
        window.open('https://www.wikipedia.org', '_blank');
    }
    else if (text.toLowerCase().includes('open google')){
        speak('Opening Google for you...')
        window.open('https://www.google.com', '_blank');
    }
    else if (text.toLowerCase().includes('open stackoverflow')){
        speak('Opening Stackoverflow for you...')
        window.open('https://stackoverflow.com', '_blank');
        }
    else if (text.toLowerCase().includes('open github')){
        speak('Opening Github for you...')
         window.open('https://github.com', '_blank');
        }
    else if (text.toLowerCase().includes('open linkedin')){
        speak('Opening LinkedIn for you...')
        window.open('https://www.linkedin.com', '_blank');
        }
    else if (text.toLowerCase().includes('open twitter')){
        speak('Opening Twitter for you...')
        window.open('https://www.twitter.com', '_blank');
        }
    else if (text.toLowerCase().includes('open reddit')){
        speak('Opening Reddit for you...')
        window.open('https://www.reddit.com', '_blank');
        }
    else if (text.toLowerCase().includes('open discord')){
        speak('Opening Discord for you...')
        window.open('https://discord.com', '_blank');
        }
    else if (text.toLowerCase().includes('open netflix')){
        speak('Opening Netflix for you...')
        window.open('https://www.netflix.com', '_blank');
        }
    else if (text.toLowerCase().includes('open amazon')){
        speak('Opening Amazon for you...')
        window.open('https://www.amazon.com', '_blank');
        }
    else if (text.toLowerCase().includes('open calculator')){
        speak('Opening Calculator for you...')
        window.open('calculator://');
        }
    else if (text.toLowerCase().includes('open whatsapp')){
        speak('Opening Whatsapp for you...')
        window.open('WhatsApp://');
        }
    else if (text.toLowerCase().includes('open v s')){
        speak('Opening Visual Studio Code for you...')
        window.open('Visual Studio Code://');
        }
    else if (text.toLowerCase().includes('open chrome')){
        speak('Opening Google Chrome for you...')
        window.open('Google Chrome://');
        }
    else if (text.toLowerCase().includes('open cmd'|| 'open command prompt')){
        speak('Opening Command Prompt for you...')
        window.open('Command Prompt://');
        }
    else if (text.toLowerCase().includes('open brave')){
        speak('Opening Brave Browser for you...')
        window.location.href = 'https://brave.com';
        }
    else if (text.toLowerCase().includes('open opera')){
        speak('Opening Opera Browser for you...')
        window.location.href = 'https://www.opera.com';
        }
    else if (text.toLowerCase().includes('open edge'  || 'open microsoft edge')){

        speak('Opening Microsoft Edge for you...')
        window.location.href = 'https://www.microsoft.com/edge';
        }
    else if (text.toLowerCase().includes('time')){
        speak('The current time is ' + new Date().toLocaleTimeString());
        }
    else if  (text.toLowerCase().includes('date')){
        speak('Today is ' + new Date().toLocaleDateString());
    }
    else{
        speak(`This is what i found on Internet on ${text.toLowerCase().replace("cleo","")}`)
        window.open(`https://www.google.com/search?q=${text.toLowerCase().replace("cleo","")}`, '_blank');
    }

}

