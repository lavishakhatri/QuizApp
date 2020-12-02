class Game
{
    constructor()
    {

       
       
        
    }

showQuestion()
{
clear()
    
    var index=1
    var queRef= database.ref('/question/'+index+'/que')

    queRef.on("value", function(data){
        var ques= createElement('h2',data.val());
        ques.position(250,250)
    })


var optionRef1= database.ref('/question/2/a')

optionRef1.on("value", function(data){
    var optionA= createButton(data.val())

    optionA.position(350,350)
})
    var optionRef2= database.ref('/question/2/b')

    optionRef2.on("value", function(data){
        var optionB= createButton(data.val())
    
        optionB.position(450,350)


})
}
    







}