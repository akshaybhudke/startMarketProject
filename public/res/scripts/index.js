/*NOTE: All response from API Call will contain the following structure
/*
    {
        "status": "success",=====> will contain either 'success' or 'failure'
        "code": 200,======> status code Ex:404,500,200
        "data": {},====>>requested data
        "error": ""====>>if any errors
    }
*/


/*Global Variables Section*/


//Declare your Global Variables inside this block




/*End of Global Variables*/

// A $(document).ready() block.
$(document).ready(function() {
    
    //Write any code you want executed in a $(document).ready() block here
 getProducts();


});

//Get List of Products from the database
function getProducts() {
     $.ajax({
            url: "http://localhost:3000/products",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            type: "GET",
            success: callback
            /*
            success: function (response) {
            iterateThroughProducts(response)
        }*/
    });


//productInfo



    /***
    Write your code for fetching the list of product from the database

    Using AJAX call the webservice http://localhost:3000/products in GET method
    It will return an Array of objects as follows
    
        {
            [
                {
                    "_id" : "57b6fabb977a336f514e73ef",
                    "price" : 200,
                    "description" : "Great pictures make all the difference. That’s why there’s the new Moto G Plus, 4th Gen. It gives you a 16 MP camera with laser focus and a whole lot more, so you can say goodbye to blurry photos and missed shots. Instantly unlock your phone using your unique fingerprint as a passcode. Get up to 6 hours of power in just 15 minutes of charging, along with an all-day battery. And get the speed you need now and in the future with a powerful octa-core processor.",
                    "category" : "Smartphones",
                    "name" : "Moto G Plus, 4th Gen (Black, 32 GB)",
                    "productImg" : {
                    "fileName" : "57b6fabb977a336f514e73ef_Product.png",
                    "filePath" : "./public/images/Product/57b6fabb977a336f514e73ef_Product.png",
                    "fileType" : "png"
                },
                {
                    //Next Product and so on
                }
            ]
        }

    Using jQuery
    Iterate through this response array and dynamically create the products list
    using JavaScript DOM and innerHTML.
    ***/
}

function callback(response){
var productObj=response.data;
//var product =null;
var newHTML ;
$(productObj).each(function (i,val){
      /*  var _id =null;
        var price=null;
        var description=null;
        var category=null;
        var name=null;
        var productImg =new Array();
      */  console.log(val.category);

        var category="";
        category += "<div class=\"btn  btn-success btn-sm \" >"+val.category+"<\/div>";



        var strVar="";
        strVar += " <div class=\" col-md-12 col-sm-12 col-xs-12 panel panel-default\">";
        strVar += "                                   <div class=\" TileContainer\">";
        strVar += "                                    <div class=\"imgContainer\">";
        strVar += "                                        <img class=\"img-rounded  img-thumbnail img-responsive\" alt=\"Responsive image\"  src=\"images\/product.png\">";
        strVar += "                                        <a href=\"#\" class=\" pull-right\"><span class=\"glyphicon glyphicon-upload\"><\/span> Upload <\/a>";
        strVar += "                                    <\/div>";
        strVar += "                                    <div class=\"  copyContainer\">";
        strVar += "                                        <h2>"+val.name+"<\/h2>";
        strVar += "                                        <p>"+val.description+"<\/p>";
        strVar += "                                        <p>"+val.category+"<\/p>";
        strVar += "                                       <span class=\"price\">Rs."+val.price+"<\/span>";
        strVar += "                                    <\/div>";
        strVar += "                                   <\/div>";
        strVar += "                                   <div class=\"  buttonContainer\"> <a href=\"#\" class=\"btn  btn-success btn-sm pull-right\">";
        strVar += "                                       <span class=\"glyphicon glyphicon-edit\"><\/span> Edit";
        strVar += "                                   <\/a>";
        strVar += "                                       <a href=\"#\" class=\"btn btn-danger btn-sm pull-right\">";
        strVar += "                                           <span class=\"glyphicon glyphicon-trash\"><\/span> Remove";
        strVar += "                                       <\/a><\/div>";
        strVar += "                               <\/div>";
        console.log(strVar)
        $(".products").append(strVar).html()
        $(".category").append(category).html()
        /*$("#product").append('<div class="row" id="productInfoWithImage " >
                                                                      <div class="col-md-3" id="productImage">
                                                                              <img class="img-thumbnail" src="images/product.png">
                                                                          <a href="#" class=" pull-right">
                                                                              <span class="glyphicon glyphicon-upload"></span> Upload
                                                                          </a>
                                                                      </div>
                                                                      <div class="col-md-6" id="productInfo">
                                                                          <div class="product pull-right">
                                                                              <div class="product-block">
                                                                                  <h1 class="productName">$productName</h1>
                                                                                  <h4 class="productDescription">$productDescription </h4>
                                                                                  <h6 class="productCategory mb-2 text-muted">$productCategory</h6>
                                                                                  <p class="price"><b><i>$price</i></b></p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                              </div>')*/




//        $(".productInfo").append("<div class="product-block"><span><h2 class="+product.name+"></h2></span><span><h5 class="productDescription" data-toggle="collapse"> </h5></span><span> <h6 class="productCategory mb-2 text-muted"></span></h6><p class="price"><b><i><span></span></i></b></p></div>")
    //    $("#productList").append('<h2>'+val.category+'</h2>');

//        $.each(val,function(key,val){
//        if(key=="_id"){
//         _id=val;
//         }
//        if(key=="price"){
//         price =val;
//         }
//        if(key=="description"){
//         description =val;
//         }
//        if(key=="category"){
//         category =val;
//         }
//        if(key=="name"){
//         name =val;
//         }
//        if(key=="productImg"){
//        productImg=val;
//        }
//        var  product =new Object();
//
//                                    product._id =_id;
//                                    product.price =price;
//                                    product.description=description;
//                                    product.category=category;
//                                    product.name=name;
//                                    product.productImg=productImg;


// newHTML = '<p>"'+name+'</p>'+'<br>';
//
//
//
//});


});

}



function iterateThroughProducts(response){


    var data=response.data;

$(data).each(function(i,val)
 {
    $.each(val,function(key,val)
  {
          console.log(key + " : " + val);
  });
});
}



//Initial call to populate the Products list the first time the page loads
//getProducts();


/*
 
 Write a generic click even capture code block 
 to capture the click events of all the buttons in the HTML page

 If the button is remove
 -----------------------
 Popup an alert message to confirm the delete
 if confirmed
 Call the API
    http://localhost:3000/product/<id>
    with method = DELETE
    replace <id> with the _id in the product object

 Show the success/failure message in a message div with the corresponding color green/red


 If the button is add
 -----------------------
 Using jQuery Validate the form
 All fields are mandatory.
 Call the API
    http://localhost:3000/product
    with method=POST
    For this call data should be in following structure
    {
         name:'',
         category:'',
         description:'',
         price:''
    }

 Show the success/failure messages in a message div with the corresponding color green/red
 Reset the form and set the mode to Add

 
 If the button is edit
 ---------------------
 Change the Form to Edit Mode
 Populate the details of the product in the form
 
 
 If the button is Update
 -----------------------
 Using jQuery Validate the form
 All fields are mandatory.
 Call the API
    http://localhost:3000/product/:id    
    with method=PUT
    replace <id> with the _id in the product object
    For this call data should be in following structure
     {
     name:'',
     category:'',
     description:'',
     price:''
     }

 Show the success/failure messages in a message div with the corresponding color green/red
 Reset the Form
 Set the Form back to Add mode

 if the button is Cancel
 -----------------------
 Reset the form
 Set the mode to Add

 */

/*Remove Product*/
function removeProduct(id) {

//write your code here to remove the product and call when remove button clicked

}

/*Update Product*/
function editProduct(id) {

    //write your code here to update the product and call when update button clicked

}

function createProduct(id) {

    //write your code here to create  the product and call when add button clicked

}


/* 
    //Code Block for Drag and Drop Filter

    //Write your code here for making the Category List
    Using jQuery
    From the products list, create a list of unique categories
    Display each category as an individual button, dynamically creating the required HTML Code

    
    //Write your code here for filtering the products list on Drop 
    Using jQuery
    Show the category button with a font-awesome times icon to its right in the filter list
    A category should appear only once in the filter list
    Filter the products list with, products belonging to the selected categories only


    //Write your code to remove a category from the filter list
    Using jQuery
    When the user clicks on the x icon
    Remove the category button from the filter list
    Filter the products list with, products belonging to the selected categories only

 */


//Code block for Free Text Search
$(document).ready(function() {
    $("#searchText").keyup(function() {
        /*
            //Write your code here for the Free Text Search
            When the user types text in the search input box. 
            As he types the text filter the products list
            Matching the following fields
                - Name
                - Description
                - Category
                - Price
            
            The search string maybe present in any one of the fields
            anywhere in the content

         */
        
    });

});


//Code block for Image Upload

/*
    //Write your Code here for the Image Upload Feature
    Make the product image clickable in the getProducts() method.
    When the user clicks on the product image
    Open the file selector window
    Display the selected image as a preview in the product tile
    
    //Image Upload
    When the user clicks Upload
    Using AJAX
    Update the product image using the following api call
        Call the api
            http://localhost:3000/product/id/ProductImg
            method=PUT
            the data for this call should be as FormData
            eg:
            var formData = new FormData();
            formData.append('file', file, file.name);
    
    Refresh the products list to show the new image
 */
