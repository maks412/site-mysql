function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementsByTagName("*").style.opacity = "0.5";
    document.getElementsByClassName("form-popup").style.opacity = "1";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  function showCustomer(str) {
    var xhttp; 
    if (str == "") {
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "getcustomer.php?q="+str, true);
    xhttp.send();
  }
  