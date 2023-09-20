const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for(let i = 1; i < profileDataArr.length; i++){
       console.log(profileDataArr[i]); 
    }

    console.log('================')

    //this is the same as the for loop
    profileDataArr.forEach(profileItem => {
        console.log(profileItem);
        
    });
    
};
printProfileData(profileDataArgs);
