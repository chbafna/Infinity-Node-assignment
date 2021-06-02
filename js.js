var count =1
var temp=0
var heading1 = document.getElementById('description0')
var input = document.getElementById('input')
function createnode(){
    if(input.value==''){
        alert('Invalid name')
    }else{
            if(temp==0){
                var opa = document.querySelector('.visual')
                opa.style.opacity=1;
                var createHeader = document.getElementById('input')
                heading1.textContent=createHeader.value
                input.value=''
                temp=1
            }else{
                var heading = document.getElementById('list')
                var name =input.value

                var newnode ='<li id="innerlist'+count+'">' + '<h2>'+(count+1)+' Node</h2>'+' <p id="description'+count+'">'+name+'</p>'+'<input type="text" id="name'+count+'" placeholder="Enter subNode"><br>' + '<button id="newnode" type="button" onclick="subNode('+count+')">New Node</button>' + '<button id="delete" type="button" onclick="deletenode('+count+')">Delete</button>'+'<ul class="inner" id="innerul'+count+'">'+'</ul>'+'</li>';


                heading.innerHTML += newnode
                count++
                input.value=''
            }
    }
}



function subNode(count){
    var name =document.getElementById('name'+count)
    var input2=name.value
    var li =document.getElementById('innerul'+count)
    var count2 =  li.childNodes.length
    var newSubNode ='<li id="subNode'+count+count2+'" >' + '<h2>'+(count+1)+count2+' Node`</h2>'+' <p id="descriptionnode'+count+count2+'">'+input2+'</p>'  + '<button id="delete" type="button" onclick="remove('+count+','+count2+')">Delete</button>'+'</li>';

    li.innerHTML +=newSubNode
    name.value=''
}

function deletenode(count){
    var del=document.getElementById('innerlist'+count)
    del.remove()
    count--
}

function remove(count,count2){
    var deletesubnode=document.getElementById('subNode'+count+count2)
    deletesubnode.remove()
}

function search(){
    // var count=0
    var li=document.getElementById('list')
    var temp = (li.childNodes.length)-2
    console.log(temp);
    var search1 =document.getElementById('search')
    var rend =search1.value
    console.log(rend);

    for (let i = 0; i < temp; i++) {
        var subLi=document.getElementById('innerul'+i)
        var temp2 = (subLi.childNodes.length)
        var nodetext = document.getElementById('description'+i)
        var temp4= nodetext.textContent
        if (rend == temp4) {
            var a=1
            alert('Found, Node No:'+(i+1))
        }
        for (let index=0; index < temp2; index++) {
            var SubNodeText =document.getElementById('descriptionnode'+i+index)
            console.log(SubNodeText);
            var temp3=SubNodeText.textContent 
            if (rend == temp3) {
                var a=1
                alert('Found, SubNode No:'+(i+1)+(index))
                break
            }
        }
    }
if (a!=1) {
    alert('Not found')
}
    search1.value=''
}

