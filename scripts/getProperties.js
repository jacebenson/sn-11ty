//import fs from "fs";
//import fetch from 'node-fetch';
//import dotenv from "dotenv";
let fs = require("fs");
let fetch = require('node-fetch');
let dotenv = require("dotenv");
dotenv.config();
let makeRequest = async function (offset) {
    if (!offset) offset = 0
    console.log({ offset })
    let instance = 'https://' + process.env.instanceUrl;
    let path = "/api/now/table/sys_properties?sysparm_limit=1000&sysparm_display_value=true&sysparm_offset=" + offset;
    let fullPath = instance + path;
    let properties = [];

    let username = process.env.instanceUsername;
    let password = process.env.instancePassword;
    let headers = {
        Authorization: "Basic " + Buffer.from(username + ":" + password).toString("base64"),
        contentType: "application/json",
        accept: "application/json, text/plain, */*",
    };
    await fetch(fullPath, {
        method: "GET",
        headers,
    })
        .then((res) => res.json())
        .then(async (json) => {
            let localOffset = offset;
            if (json.result.length === 0) return properties;
            properties = json.result;
            localOffset += 1000;
            let newProperties = await makeRequest(localOffset);
            properties = properties.concat(newProperties);
        })
        .catch((err) => console.log(err));
    return properties;

};

async function makeSimpleProperties() {
    // check if folder exists if not make it
    // get the properties
    let localProperties = JSON.parse(fs.readFileSync("./src/_data/snPropertiesLocal.json", "utf8"));
    let properties = await makeRequest();
    // loop through the properties
    //properties.length = 10;
    let returnProperties = [];
    returnProperties = properties.map((property) => {
        // the name needs to be a "slug"
        // so just a-zA-Z0-9.-
        let name = (()=>{
            let name = property.name;
            // replace : with ' '
            name = name?.replace(/:/g, " ");
            name = name?.replace(/#/g, " ");
            name = name?.replace(/`/g, " ");
            name = name?.replace(/"/g, " ");
            name = name?.replace(/'/g, " ");
            // replace any number new lines with ' '
            name = name?.replace(/\n/g, " ");
            // replace and * with ' '   
            // replace any [ ] with ' '
            name = name?.replace(/\[/g, " ");
            name = name?.replace(/\]/g, " ");
            // replace any number of spaces with ' '
            // replace escape characters with ' '
            name = name?.replace(/\\/g, " ");
            name = name?.replace(/\s+/g, " ");
            return name;
        })()
        
        
        let description = property.description;
        // replace : with ' '
        description = description?.replace(/:/g, " ");
        description = description?.replace(/#/g, " ");
        description = description?.replace(/`/g, " ");
        description = description?.replace(/"/g, " ");
        description = description?.replace(/'/g, " ");
        // replace any number new lines with ' '
        description = description?.replace(/\n/g, " ");
        // replace and * with ' '   
        // replace any [ ] with ' '
        description = description?.replace(/\[/g, " ");
        description = description?.replace(/\]/g, " ");
        // replace any number of spaces with ' '
        // replace escape characters with ' '
        description = description?.replace(/\\/g, " ");


        description = description?.replace(/\s+/g, " ");

        let markdown = "---" + "\n";
        markdown += "title: \"" + name + "\"\n";
        // sometimes the description is null or undefined
        // if it is set it to "No description available"
        if (!description) description = "No description available";
        if (description == "null") description = "No description available";
        let value  = property.value;
        let sysid = property.sys_id;
        return {
            name,
            actualName: property.name,
            description,
            value,
            sysid
        }
    });
    // lets write ober th snPropertiesLocal.json file
    // lets sort the properties by name alphabetically case insensitive
    returnProperties.sort((a, b) => {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
        return 1;
        }
        // names must be equal
        return 0;
    });
    fs.writeFile("./src/_data/snPropertiesLocal.json", JSON.stringify(returnProperties, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
    }
    );
}

return makeSimpleProperties();