var app=angular.module("Translate",[]);
app.controller("Translatecontroller",function ($scope,$http) {
    $scope.translate = function () {
        console.log(6+5);
        var keyword = document.getElementById('justwatchkeyword').value;
        console.log(keyword);
        var language= document.getElementById('lang').value;
        console.log(language);
        $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180917T233244Z.15f1c58e698fe361.08e5eafa245cc6708182fb064c55523007ca6a3e'+'&text='+keyword+'&lang='+language).success(function (data) {

            console.log(data);
             $scope.translatorWord=data.text;
        })

    }
})
