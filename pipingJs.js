const fs=require('fs');
//readStream object - reades data from the file specified
rStream=fs.createReadStream("C://Users/ARJU/Desktop/F.S.D.ProjectRepo/F.S.D.Projects/Piping/input.txt");
//writeStream object - writes data to file(destination) specified
wStream=fs.createWriteStream("C://Users/ARJU/Desktop/F.S.D.ProjectRepo/F.S.D.Projects/Piping/dummy")
            //convert and write to file
// rStream.on("data",(data)=>
// {
//     var chunk=data.toString();
//     console.log(chunk);
//     wStream.write(chunk);
// })
rStream.pipe(wStream); //using pipe() to read and write 