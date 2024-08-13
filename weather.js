function onGeoOk(cityName) {
    console.log(cityName);
    const apiKey = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    
    fetch(url).then(response => response.json())
    .then(data => {
        console.log(url);
        console.log(data.name, data.main.temp, data.wind.speed);
        const city = document.querySelector('#text_3 p:nth-child(2)');
        const weather = document.querySelector('#weather p:first-child');
        const humidity = document.querySelector('#weather p:nth-child(2)');
        const conclusion = document.querySelector('#weather p:last-child');
        const conclusion2 = document.querySelector('#condition');
        const analize = document.querySelector('#analize p:first-child');
        const analize2 = document.querySelector('#analize p:last-child');
        const img = document.querySelector('#imgBox div:first-child');

        if(data.name === "Yach’on") {
            city.innerText = "광주광역시";
        } else if(data.name === "Seoul") {
            city.innerText = "서울특별시";
        } else  if(data.name === "Busan") {
            city.innerText = "부산광역시";
        } else if(data.name === "Incheon") {
            city.innerText = "인천광역시";
        } else if(data.name === "Daegu") {
            city.innerText = "대구광역시";
        } else if(data.name === "Daejeon") {
            city.innerText = "대전광역시";
        }else if(data.name === "Ulsan") {
            city.innerText = "울산광역시";
        }else if(data.name === "Jeju City") {
            city.innerText = "제주특별자지도";
        } else if(data.name === "Sejong") {
            city.innerText = "세종특별자치시";
        } else {
            city.innerText = '도시' + data.name;
        }
        weather.innerText = data.main.temp + '℃ // ';
        humidity.innerText = data.main.humidity + '%';
        //날시
        if(data.weather[0].main === "Sunny") {
            conclusion2.innerText = '맑음';
            analize.innerText = '화창한 하루에요!. 사람에 따라 덥고 추울 수 있어요'
            document.getElementById('imgBox').src = 'img/Sunny.png';
        } else if(data.weather[0].main === "Clouds") {
            conclusion2.innerText = '흐림'
            analize.innerText = '구름이 껴서 선선해요. 약간 쌀쌀할 수 있으니 겉옷을 가져가세요'
            document.getElementById('imgBox').src = 'img/Cloudy.png';

        } else if(data.weather[0].main === 'Rain') {
            conclusion2.innerText = '우천';
            document.getElementById('imgBox').src = 'img/Rainy.png';
            analize.innerText = '비가 오고 있어요! 나가실때 우산을 꼭 챙기세요!'
        }
        //온도
        if(data.main.temp >= 20 && data.main.temp <= 25) {
            conclusion.innerText = '// 화창함';
            analize2.innerText = '밖에서 활동하기 좋은 온도에요. 동네한바퀴 돌고 오는게 어떨까요?'
        } else if(data.main.temp > 25) {
            conclusion.innerText = '// 더움';
            analize2.innerText = '날이 더워요. 수분보충 잊지 마세요!!'
        } else if(data.main.temp < 20) {
            conclusion.innerText = '// 추움';
            analize2.innerText = '추워요. 오들오들 떨지 마시고, 외투를 꼭 챙기세요!'
        }
        //습도
        if(data.main.humidity < 40) {
            conclusion.innerText + '// 건조함';  
        } else if(data.main.humidity > 60) {
            conclusion.innerText = '// 습함';
        }



    });
}
function onGeoError() {
     alert("Can't find you. No weather for you");
     alert("Please refresh");
}

function chageLangSelect() {
    const selectElement = document.getElementById('mySelect');
    const selectedValue = selectElement.value;
    console.log(selectedValue);
    onGeoOk(selectedValue);
}

onGeoOk('Yach’on');
/*
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);*/


