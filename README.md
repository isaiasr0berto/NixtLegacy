# NixtJS Legacy Edition:
The repository for the NixtJS Legacy Edition (Which is intended to be a fast replacement for jQuery on simple pages), my incomplete project from another deleted profile, I wish to resume until the end to start the new era of NixtJS.

Very small javascript library, to replace the basic functions of jQuery...

## 1.05.01 BETA

## Use:

~~~javascript
nixt("SELECTOR").desiredFunction( atribs )...
~~~

###### Examples:

~~~javascript
// Stylize
nixt("h1").stylize("color:red");

// InnerHTML
nixt("#text").html( "<h1>Text Content</h1>" );

// InnerText
nixt("#text").text( "Text Content" );

// Onclick
nixt("button").click( function() { alert("You Clicked the button") } );

// Append (only text, not html)
nixt("#text").append("Text Append... ");

// Set Attributes
nixt("form").setAttribute("method", "post");


// Hide element in DOM
nixt("div#text").hide();

// Show element with DOM
nixt("div#text").show();

// Prepend (only text, not html)
nixt("div#text").prepend("text... ");

// Add class to selector
nixt("div#text").addClass("myClass");

// Remove class to selector
nixt("div#text").removeClass();

// Toggle class to selector
nixt("div#text").toggleClass();

// Remove Attribute of html element
nixt("div#text").removeAttribute("id");

// Remove this selected element/selector of DOM
nixt("div#text").remove();

// Empty InnerHTML of element
nixt("div#text").empty();
~~~

###### Click Function Example:

~~~javascript
nixt("#button").click(function(){
    nixt("#textlabel").text( nixt("#text").value() );
});
~~~

~~~javascript
nixt("button").click(function(){
    nixt("#text").value("My name is John");
});
~~~

~~~javascript
nixt("button").click(function(){
    nixt("#info").toggle();
});
~~~

##### Just that, in the future I plan to add functions equivalent to ajax()... suggestions, criticisms, etc. are always welcome.

A big thank you to my friend Kawan, check at profile in [K4w4n's GitHub Profile](https://github.com/K4w4n)
