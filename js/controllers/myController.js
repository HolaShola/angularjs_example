myApp.controller('QuestionController', function($scope, $window) {
    $scope.question={
        text: 'Какой js-фреймворк лучше использовать?',
        author: 'Иван Иванов',
        date: '20/10/2013',
        answers: 
        [{
            text: 'AngularJS!',
            author: 'Вова Сидоров',
            date: '20/10/2013',
            rate:2
        },{
            text: 'AngularJS лучше всех',
            author: 'Олег Кузнецов',
            date: '20/10/2013',
            rate:0
        },{
            text: 'Я бы использовал knockout',
            author: 'Неизвестный',
            date: '21/10/2013',
            rate:0
        }],
        items: [
            { purchase: "Bread", done: false, price: 15.9 },
            { purchase: "Oil", done: false, price: 60 },
            { purchase: "Water", done: true, price: 22.6 },
            { purchase: "Orange", done: false, price:310 }
        ]
    };
     
    $scope.downloadUrl = "1";
    $scope.filename = "er";
    $scope.buttonText = "Download";
    
    $scope.downloadFile = function(csv) {
        console.log("downloadFile()");

        var blob = new Blob([csv], {type: 'text/csv;charset=utf-8'});
      //  console.log(blob);
        $scope.downloadUrl = window.URL.createObjectURL(blob);
//        console.log(url);
        console.log($scope.downloadUrl);
        // $scope.downloadUrl = "https://sennajs.com/images/logo.png";
    }

    $scope.downloadCSV = function(csv, filename) {
        var csvFile;
        var downloadLink;
    
        // CSV file
        csvFile = new Blob([csv], {type: 'text/csv;charset=utf-8'});
    
        // Download link
        downloadLink = document.createElement("a");
    
        // File name
        downloadLink.download = filename;
    
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
    
        // Hide download link
        downloadLink.style.display = "none";
    
        // Add the link to DOM
        document.body.appendChild(downloadLink);
    
        // Click download link
        downloadLink.click();
    }
    
    $scope.exportTableToCSV = function() {
        var csv = [];
        var rows = document.querySelectorAll("tr");
       
       for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            
            for (var j = 0; j < cols.length; j++) 
                row.push(cols[j].innerText);
            csv.push(row.join(","));       
        }

        var csv_str = csv.join("\n");
        console.log(csv);
        console.log(csv_str);

    
        $scope.downloadCSV(csv_str, "myFile.csv");
    }
});