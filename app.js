function press(){
    var locate = window.location.href   // check current href location
    // console.log(locate);
    // window.location.href = "https://www.google.com/"  //change the url of the page
    // // best practice
    // window.location.assign("https://www.google.com/");  //change the url of the page same as href 
    // window.location.replace("https://www.google.com/");  //replace the url of the page or return/back path bhool jata hai "authentication or login k liye must use karna hai"  
   
    // window.location.pathname   // to check the path name '/' is the main paath

    //  //page reload 
    // window.location.reload() // cache reloading k liye param me false b pass karsakty hain
    // window.location.reload(true) // server se reloading k liye param true pass karna hai

    // window.open(); // to open blank new window

    // var content = '<h1>Successfully change</h1>'
    // window.open().document.write(content);

    // window.open("https://www.google.com/"); //newtab me url open karega
    // // to change window width height position of new window
    
    var win = window.open("https://www.google.com/","win1-name","width = 200, height = 100, left=300, top = 300");
    // // Test condiion if browser pop blocker is enable
    if(win === null){
        alert("Please disable pop up blocker");
        win.close(); //close window
    }
    // win.open();// open window
}


// history.back(); history.go(-2);
// history.forward(); history.go(1);
// document.referrer // to check from which website user visited the current website