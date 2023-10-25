// import csv
import { parse } from 'csv-parse'
import { createRequire } from 'module'
const require = createRequire(import.meta.url);

const sgMail = require('@sendgrid/mail');
// must export your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const fs = require("fs");
const pathToAttachment = `yourpdf.pdf`;
const attachment = fs.readFileSync(pathToAttachment).toString("base64");

const pathToCSV = `nameofyourcsv.csv`;
let emailArray = [];

const readCSV = fs.readFile(pathToCSV, 'utf8', function(err,csvData) {
	if (err) {
		throw err;
	}
	let bufferString = csvData.toString();
	let bufferStringSplit = bufferString.split('\n');
	let emailArray = bufferStringSplit.slice(1); 
	// print array of emails
	// console.log(emailArray);
	})

const msg = {
	// MASS SEND HERE!!!!!
	to:'user1@gmail.com',
	from: 'yoursender@email.com',
	subject: 'Write Your Subject Here',
	// text: 'The text gets overwritten by html',
	html: `You can write a simple message in the text block or in the HTML block! 
	<br><br> 
	Just like a normal HTML file, you can use any HTML tags - even links!
	Here's a link to UH's CougarCS Website: <a href="https://cougarcs.com"></a>`, 
	attachments: [
		{
			content: attachment,
			filename: "nameofyourpdf.pdf",
			type: "application/pdf",
			disposition: "attachment"
		}
	]
};
sgMail.send(msg).catch(err => {
	console.log(err);
});
