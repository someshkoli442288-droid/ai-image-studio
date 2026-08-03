/*
=====================================
 AI IMAGE STUDIO PRO
 BACKEND SERVER
=====================================
*/


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();


const app = express();


// Middleware

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));



// Test Route

app.get("/", (req,res)=>{

    res.json({

        message:
        "AI Image Studio Backend Running 🚀"

    });

});



// Image Route

app.post("/api/generate", async(req,res)=>{


    try{


        const {
            prompt,
            style,
            ratio
        } = req.body;



        if(!prompt){

            return res.status(400).json({

                error:
                "Prompt required"

            });

        }



        /*
        OpenAI Image API
        will be connected here
        */


        res.json({

            success:true,

            message:
            "Image generation system ready",

            data:{

                prompt,
                style,
                ratio

            }

        });



    }

    catch(error){


        res.status(500).json({

            error:
            "Server Error"

        });


    }


});




// Server Start

const PORT =
process.env.PORT || 5000;


app.listen(PORT,()=>{


console.log(

`Server running on port ${PORT}`

);


});
