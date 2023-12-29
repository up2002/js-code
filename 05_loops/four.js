const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift"
}

// for (const key in myObject) {
//     console.log(`${key} sortcut for ${myObject[key]}`);
// }

const programing = ["js" , "cpp"];
for (const key in programing) {
   console.log(key);
   console.log(programing[key]);
}

