import React from "react"

import upload from "../../assets/upload.png";
import image from "../../assets/woman.jpg";
import doc from "../../assets/doc.png";
import pdf from "../../assets/pdf.png";
import xls from "../../assets/xls.png";
import ppt from "../../assets/ppt.png";
import cross from "../../assets/cross.png";

function Upload(){
    return(
        <div class="mt-3 pl-5 pr-5">
                    <text><b>Upload Attachment</b></text>

                    <div class="d-flex justify-content-center mt-2" style={{border: "2px", borderStyle: "dashed", borderColor: "#B2B8BD", borderRadius: "5px"}}>
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center mt-3">
                                <text class="m-2" style={{color: "#B2B8BD", fontFamily: "verdana", fontSize: "13px"}}>Drop your attachment here or click to upload</text>
                            </div>

                            <div class="col-12 d-flex justify-content-center mb-3">
                                <img src={upload} alt="" height="40"/>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col">
                            <img class="mt-3 border border-dark rounded" src={image} alt="" height="145"/>
                            <img src={cross} class="cross" alt=""/>
                        </div>
                        <div class="col">
                            <img class="mt-3 border border-dark rounded" src={doc} alt="" height="145"/>
                            <img src={cross} class="cross" alt=""/>
                        </div>
                        <div class="col">
                            <img class="mt-3 border border-dark rounded" src={pdf} alt="" height="145"/>
                            <img src={cross} class="cross" alt=""/>
                        </div>
                        <div class="col">
                            <img class="mt-3 border border-dark rounded" src={xls} alt="" height="145"/>
                            <img src={cross} class="cross" alt=""/>
                        </div>
                        <div class="col">
                            <img class="mt-3 border border-dark rounded" src={ppt} alt="" height="145"/>
                            <img src={cross} class="cross" alt=""/>
                        </div>
                    </div>


                    <div class="row mt-3">
                        <div class="col-6">
                            <button class="btn btn-block"><b>Cancel</b></button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-dark btn-block" style={{background: "black"}}>Update</button>
                        </div>
                    </div>
                </div>
    )
}

export default Upload;