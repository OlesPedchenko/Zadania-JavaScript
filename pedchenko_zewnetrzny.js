function okno_zamknij_pedchenko() 
{
 window.close()
}
document.write("ostatnia modyfikacja strony".fontcolor("red").bold().fontsize(7)+"<br>");
document.write(document.lastModified);
document.write('<br/><input type="button" value="zamknij okno" onclick="okno_zamknij_pedchenko()">');