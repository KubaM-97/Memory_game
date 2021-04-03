export async function loadDoc(filename: string):Promise<void> {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("step")!.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}