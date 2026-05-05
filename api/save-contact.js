export default function handler(req, res) {
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Roberto Brandt',
    'N:Brandt;Roberto;;;',
    'ORG:J.R. Brandt Web Design',
    'TITLE:Webdesigner & Developer',
    'TEL;TYPE=CELL,PREF:+5521980914107',
    'EMAIL;TYPE=INTERNET,WORK:jrmacbrandt@yahoo.com',
    'URL:https://portfolio-roberto-five.vercel.app/',
    'X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/jrbrandt.webdesigner/',
    'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/jos%C3%A9-roberto-machado-brandt-1a424460',
    'NOTE:Crio sites e sistemas que ajudam pequenos negócios a atrair e reter mais clientes.',
    'REV:' + new Date().toISOString().replace(/[:.-]/g, '').slice(0, 15) + 'Z',
    'END:VCARD'
  ].join('\r\n');

  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="Roberto_Brandt.vcf"');
  res.status(200).send(vCardData);
}
