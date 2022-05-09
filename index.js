var nums1=Math.floor(Math.random()*6)+1;   //random number generate between 1-6 for player1
var nums2=Math.floor(Math.random()*6)+1;   //random number generate between 1-6 dor player2
var path1="images/dice"+nums1+".png";      //image path for player 1 acc to number generated
var path2="images/dice"+nums2+".png";      //image path for player 2 acc to number generated

//setting corresponding die img path/changing src attribute 
document.querySelector(".img1").setAttribute("src",path1);
document.querySelector(".img2").setAttribute("src",path2);

//if die1 has greater number than 2 then player 1 wins else if player 2 number greater then player 2 wins 
//draw if same number comes 
if(nums1>nums2){       
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(nums1<nums2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}