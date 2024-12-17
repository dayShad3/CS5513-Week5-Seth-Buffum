import fs from 'fs';
import path from 'path';

const dataDir = path.join( process.cwd(), 'data');

export function getSortedList(){

    //get file path
const filePath = path.join(dataDir, 'persons.json');
    //load json content
const jsonString = fs.readFileSync(filePath, 'utf8');
    // sort string from file into JSON array obj
const jsonObj = JSON.parse(jsonString);

    // sort by name property
    jsonObj.sort(
       function(a,b){
        return a.name.localeCompare(b.name);
       } 
    );

    //use map() method to filter array

    return jsonObj.map(
        function(item){
            return {
                id: item.id.toString(),
                name: item.name
            };
        }
    );

}

// function returns ids for all json objects in array
export function getAllIds() {
    // get filepath to json file
    const filePath = path.join(dataDir, 'persons.json');
    
    // load json file contents
    const jsonString = fs.readFileSync(filePath,'utf8');
    
    // convert string from file into json array object
    const jsonObj = JSON.parse(jsonString);
  
    // use map() on array to extract just id + name properties into new array of obj values
    return jsonObj.map(
      function(item) {
        return {
          params: {
            id: item.id.toString()
          }
        };
      }
    );
    
  }
  
  // function return ALL of the properties for one single object with a match id prop value
  export async function getData(idRequested) {
    // get filepath to json file
    const filePath = path.join(dataDir, 'persons.json');
    
    // load json file contents
    const jsonString = fs.readFileSync(filePath,'utf8');
    
    // convert string from file into json array object
    const jsonObj = JSON.parse(jsonString);
  
    // find object value in array that has matching id
    const objMatch = jsonObj.filter(
      function(obj) {
        return obj.id.toString() === idRequested;
      }
    );
  
    // extract object value in filtered array if any
    let objReturned;
    if (objMatch.length > 0) {
      objReturned = objMatch[0];

      //find all aliases for found person from alias json file
      const filePath2 = path.join(dataDir, 'alias.json');

        // load json file contents
      const jsonString2 = fs.readFileSync(filePath2,'utf8');
        // convert string from file into json array object
        const jsonObj2 = JSON.parse(jsonString2);

           // find object value in array that has matching id
      const objMatch2 = jsonObj2.filter(
        function(obj) {
          return obj.owner.toString() === idRequested;
      }
    );
    objReturned.alias = objMatch2;

    } else {
      objReturned = {};
    }
  
    // return object value found
    return objReturned;
  }
  