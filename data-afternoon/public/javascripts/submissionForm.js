
/* this function gets data from the client */
function submitFunction() 
{
    var name = document.getElementById("name").value; //get the name from the text box 
    var address = document.getElementById("address").value; //get the address from the text box 

        /* send this data to the server (database) */
        $.post("http://localhost:3000/newClientData", { Name: name, Address: address}, function(response) { 
        })
}         
 
