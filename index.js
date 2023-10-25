// import csv
import { parse } from 'csv-parse'
import { createRequire } from 'module'
const require = createRequire(import.meta.url);

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const fs = require("fs");
const pathToAttachment = `ResumeDatabaseInstructions.pdf`;
const attachment = fs.readFileSync(pathToAttachment).toString("base64");

const pathToCSV = `MemberEmailList.csv`;
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
	to:'brodriguez410@gmail.com',
	from: 'communications@cougarcs.com',
	subject: 'CougarCS Resume Submission for Company Opportunities by Oct 26, 11:59PM',
	// text: 'The text gets overwritten by html',
	html: `Hello CougarCS Members! 
	<br><br> 
	We hope you're having a great day. 
	This is a friendly reminder to fill out this <a href="https://resume.cougarcs.com">form</a>, 
	and submit your resumes for potential company opportunities by Thursday, October 26th, 11:59 PM. 
	Please refer to the attached PDF for detailed instructions. If you run into any challenges or have questions, 
	please don't hesitate to reach out to Johnny Le, our Vice President of Activities. You can reach out to him 
	via Email at vp.activities@cougarcs.com or Discord at junnybe. 
	<br><br> 
	Your resume submission plays a crucial role 
	in connecting you with promising career prospects with companies (Such as Google!), and 
	we're committed to helping you succeed.
	<br><br> 
	Thank you for your cooperation!
	<br><br> 
	Best regards,
	<br>
	CougarCS`,
	attachments: [
		{
			content: attachment,
			filename: "ResumeDatabaseInstructions.pdf",
			type: "application/pdf",
			disposition: "attachment"
		}
	]
};
sgMail.send(msg).catch(err => {
	console.log(err);
});
