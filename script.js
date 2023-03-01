let myResume={
    "basics": {
      "name": " JAYASUDHAKAR C",
      "email": "jayasudhakar183@gamil.com",
      "phone": 6383707917,
      "degree": "B.E",
      "location": {
        "address": "idappadi",
        "postalCode": 637101,
        "city": "salem",
        "state": "Tamilnadu",
        "country": "India" 
      },
      "profiles": [
        {
          
          "github":"https://github.com/jayasudhakarchinnadurai"
        }
      ]
    },
    "work": [
      {
        "company": "ESFB",
        "position": "SO",
        "startDate": "2020-01-04",
        "endDate": "2022-09-15",
        
      },
    ],
    "education": [
      {
        "institution": "Sri Sathyam engineering collage of technology",
        "department": "computer science and engineering",
        "studyType": "fulltime",
        "batch start year": 2015,
        "batch end year": 2019,
        "gpa": 6.5,
      }
    ],
    "skills": [
      {
        "name": "javascript HTML,CSS",
        "level": "beginer",
       
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "CODER,DEVLOPING MY SKILLS",
      }
    ]
  }
  console.log(myResume.basics.name);
// it is used iterable object
//   for(let i in myResume){
//      console.log(i)
//   }
// it is used iterable array object
// for(let i of myResume){
//     console.log(i.name)
// }


//     <!-- //   screen
//  Screen is window property that holds information of browser user screen.
//  It refers to screen object associated with that window object. 
// Used to display screen width, height, colorDepth, pixelDepth etc
// Similar to document screen can be accessed either by window.screen or screen object directly. 
//    Screen object doesn’t have any methods as in window and document objects.
//  -->
//       <!-- window -->
// <!-- The window object is the topmost object of the DOM hierarchy. 
// It represents a browser window or frame that displays the contents 
// of the webpage. Whenever a window appears on the screen to display 
// the contents of the document, the window object is created.
// The document object is your html, aspx, php, or other document 
// that will be loaded into the browser. The document actually gets 
// loaded inside the window object and has properties available to it like title, 
// URL, cookie, etc. What does this really mean? That means if you want to 
// access a property for the window it is window.property, if it is document 
// it is window.document.property which is also available in short as document.property. -->
//         <!-- document -->
// <!-- The document object represent a web page that is loaded in the browser.
//  By accessing the document object, we can access the element in the HTML page. 
//  With the help of document objects, we can add dynamic content to our web page. 
// The document object can be accessed with a window.document or just document. -->