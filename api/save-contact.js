export default function handler(req, res) {
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:2.1',
    'FN:J. Roberto Brandt',
    'N:Brandt;J. Roberto',
    'ORG:',
    'TITLE:Webdesigner & Developer - J. Roberto Brandt',
    'TEL;CELL;PREF:+5521980914107',
    'EMAIL;INTERNET;WORK:jrmacbrandt@yahoo.com',
    'URL:https://portfolio-jrbrandt.vercel.app/',
    'X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/jrbrandt.webdesigner/',
    'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/jos%C3%A9-roberto-machado-brandt-1a424460',
    'NOTE:Crio sites e sistemas que ajudam pequenos negócios a atrair e reter mais clientes.',
    'END:VCARD'
  ].join('\r\n');

  res.setHeader('Content-Type', 'text/x-vcard');
  res.setHeader('Content-Disposition', 'inline; filename="JRoberto_Brandt.vcf"');
  res.status(200).send(vCardData);
}
