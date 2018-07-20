import React from 'react'

function SearchBox(){
  return(
    <div>
      <style jsx>{`
        body {
            font-family: Arial;
        }

        * {
            box-sizing: border-box;
        }
        div{
          background-color:transparent;
          color:white;
        }
        form.example input[type=text] {
            padding: 10px;
            font-size: 17px;
            border: 1px solid grey;
            float: right;
            width: 20%;
            background: #f1f1f1;
        }

        form.example button {
            float: right;
            width: 3%;
            padding: 10px;
            background: #2196F3;
            color: white;
            font-size: 17px;
            border: 1px solid grey;
            border-left: none;
            cursor: pointer;
        }

        form.example button:hover {
            background: #0b7dda;
        }

        form.example::after {
            content: "";
            clear: both;
            display: table;
        }
       `} </style>

      <form className="example" action="/action_page.php">
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit"><i class="fa fa-search">></i></button>
      </form>
    </div>

  )
}

export default SearchBox
