var c=0;
function func()
{
  c=c+1;
   if((c%2)!=0)
   {
     document.getElementById('blogBody').contentEditable = true;
     document.getElementById('blogTitleNew').contentEditable = true;
     document.getElementById('edit_btn').innerHTML=`<i class="fa fa-save" ></i> Save`;
   }
   else if((c%2)==0)
   {
     document.getElementById('blogBody').contentEditable = false;
     document.getElementById('blogTitleNew').contentEditable = false;
     document.getElementById('edit_btn').innerHTML=`<i class="fa fa-edit"></i> Edit`;
   }
}


var count=0;
function likeme()
{
    document.getElementById('like_btn').innerHTML=`<i class='far fa-thumbs-up' style='font-size:24px'></i>Liked!`;
    count=count+1;
    if(count==1)
    {
    
    document.getElementById('count_like').innerHTML=count+" person likes this!";
    }
    else{
        document.getElementById('count_like').innerHTML=count+" people have liked this!"; 
    }
}

function commentme()
{
    var text=document.getElementById("comment").value;
    var comment_box=document.getElementById("comment_box");
    var in_div=document.createElement("DIV");
    var para=document.createElement("P");
    comment_box.setAttribute("style","padding:10px;");
    para.setAttribute("style","margin:5px");
    // para.appendChild(text);
    in_div.setAttribute("style","background-color:white;width:95%;height:30px;margin:10px;margin-top:10px;padding:5px;");
    para.innerHTML=text;
    in_div.appendChild(para);
    // comment_box.appendChild(in_div);
    comment_box.prepend(in_div);
}