var count =0;

function changeCount(num)
{
    count += num;
    document.getElementById("count").innerHTML= count;
}

function resetFun()
{
 location.reload();
}