let solution = document.querySelector(".solution");
let reset = document.querySelector(".reset");

solution.addEventListener("click", solutionFunction);

function solutionFunction() {
    document.querySelector(".five1").innerHTML = "5";
    document.querySelector(".five2").innerHTML = "5";
    document.querySelector(".zero1").innerHTML = "0";
    document.querySelector(".zero2").innerHTML = "0";
    document.querySelector(".zero3").innerHTML = "0";
    document.querySelector(".zero4").innerHTML = "0";
    document.querySelector(".one").innerHTML = "1";
    document.querySelector(".sum").innerHTML = "Result: 100";
}

reset.addEventListener("click", resetFunction);

function resetFunction() {
    document.querySelector(".five1").innerHTML = "";
    document.querySelector(".five2").innerHTML = "";
    document.querySelector(".zero1").innerHTML = "";
    document.querySelector(".zero2").innerHTML = "";
    document.querySelector(".zero3").innerHTML = "";
    document.querySelector(".zero4").innerHTML = "";
    document.querySelector(".one").innerHTML = "";
    document.querySelector(".sum").innerHTML = "Result:";
}