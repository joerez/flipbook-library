![Flipbook](https://image.ibb.co/c4KiLS/Screen_Shot_2018_03_28_at_5_13_18_PM.png)


# flipbook-library
A solution for creating simple 3D flipbooks. I've looked all over the internet and there is no open-source flipbook library, so I thought I would create one myself. This is meant to simplify the process of creating a 3D flipbook.
View demo here: http://www.joerezendes.com/projects/flipbooklibrary/

## Installation
To install via npm, simply do the following:
```
npm install flipbook-library --save
```
## How to use
Download book.css and put it in your documents ```head```.
```
<head>
  <link rel="stylesheet" href="/woah.css">
</head>
```

Download book.js and put it right before your documents closing ```body``` tag. You will also need to put jquery in before book.js
```
<body>
  ...
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="book.js"></script>
</body>
```
Feel free to also check out the comments in index.html, book.css, and book.js for further instructions.
## Setting up your book envirment
Setting up an envirement for your book is easy. Simply create a ```div``` and give it the following class

```
<div class="bookContainer">
  <!--your book goes inside of here-->
</div>
```
You can change the size of this container in book.css. By default, it takes up the whole page.
## Creating your flipbook
This is where things get flippy and fun! Nest your ```book``` inside your ```bookContainer``` like so:
```
<div class="bookContainer">
  <div class="book hoveit">
    ... book content will go in here.
  </div>
</div>
```
The ```hoveit``` class changes the orientation on hover

## Creating the 3D Shapes that make up your flipbook
Next we've got to define our books shape in 3D. Inside of the ```div``` with the ```book``` class should be the following :
```
    <!--the top of your book shows pages. No content goes here.-->
    <div class="bookTop"></div>

    <!--this is the side of your book where you'll put a title, author, or anything else-->
    <div class="bookSide">
      <h2>The Latitude</h2>
      <p>By: The Anonymous Benefactor</p>
    </div>

    <!--this is the side of the book that has pages. No content goes here.-->
    <div class="bookSide2"></div>

    <!--this is the backside of your book. Put whatever you'd like here.-->
    <div class="page backBook">Back of book</div>

    <!--this is the bottom of your book. It shows pages. No content goes here.-->
    <div class="bookBottom"></div>

    <!--this is the cover of your book. Put your title here along with anything else-->
    <div class="page cover">
      <h2>The Latitude</h2>
      <p>By: The Anonymous Benefactor</p>
    </div>

```
## Creating book pages
Underneath the closing ```div``` with the ```cover``` class, you'll create pages like so:

```
    </div><!--cover-->

    <!--
        display your book pages in descending order. New pages are added to the top here.
        It's important you give each page the page and pagecontent class, along with a pagenumber class
    -->

      <div class="page pagecontent fifthPage bookBack">
        Page five
      </div>


      <div class="page pagecontent fourthPage">
        Page four
      </div>


      <div class="page pagecontent thirdPage">
        Page three
      </div>

      <div class="page pagecontent secondPage">
        Page two
      </div>

      <div class="page pagecontent firstPage">
        Page one
      </div>
    </div><!--book-->
  </div><!--bookContainer-->

```
It's important to remember to give each page a unique class. It's reccomended you use ```firstPage```, ```secondPage```, etc. Each page also needs the ```page``` and ```pageContent``` class.
## Making pages flip
Inside of book.js you'll need to call a function for every page you add. The first four are done for you inside.
You'll do so by calling the ```newPage``` function and passing in your pages class name as the parameter. It starts on line ```51```
```
//set up each new page here. Do not use the last page.
newPage('.firstPage');
newPage('.secondPage');
//and so on until the second to last page.
```
Your last page needs the ```backbook``` class. When this class is clicked it closes the book.
You will need to edit it's function for every page you add as well if you'd like it to close dynamically. Otherwise, just use the ```page``` class instead of the individual page.
```
  $('.firstPage').css('transform', 'rotateY(0deg)');
  ... and so on for every page
```
## Book customization
In the CSS file, there are comments that show where you can change colors. You can also do this with inline styles on these following divs to change how your book looks:
```
<div class="bookSide" style="background: ____;"></div>
<div class="backBook" style="background: ____;"></div>
<!--as well as every individual page, or just overwrite in book.css (Reccomended)-->
<div class="page" style="background: ____;"></div>
```
Inside the CSS File, you can also follow the comments that show you how you can change how your book is rotated. Please experiment as you wish.

## Contributing
If you'd like to make this library easier to use, or find bits of the documentation confusing, please open an issue or submit a pull request with a summary of the changes you've made.
