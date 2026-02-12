fetch ("Table1.txt")
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
})