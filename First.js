


function save(){
    var pn = document.getElementById("product_name");
    document.getElementById("name").innerHTML = pn.value;

    var pq = document.getElementById("product_quality");
    document.getElementById("quality").innerHTML = pq.value;

    var d = document.getElementById("production_date");
    document.getElementById("date").innerHTML = d.value;

    var q = document.getElementById("product_quantity");
    document.getElementById("quantity").innerHTML = q.value;

    var up = document.getElementById("product_price");
    document.getElementById("price").innerHTML = up.value;

    if(pn.value == ""){
        document.getElementById("warning").innerHTML=" Plese enter your name.. ";
        return false;
    }
    if(pq.value == ""){
        document.getElementById("warning").innerHTML=" Plese enter product quality.. ";
        return false;
    }
    if(d.value == ""){
        document.getElementById("warning").innerHTML=" Plese enter production date.. ";
        return false;
    }
    if(q.value == ""){
        document.getElementById("warning").innerHTML=" Plese enter number or elements.. ";
        return false;
    }
    if(up.value == ""){
        document.getElementById("warning").innerHTML=" Plese enter unit price.. ";
        return false;
    }

        
    var t = q.value * up.value;
    document.getElementById("total").innerHTML = t;
       


}