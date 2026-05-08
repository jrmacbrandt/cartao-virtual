export default function handler(req, res) {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).send('URL is required');
  }

  // Truque mestre: Enviamos o cabeçalho 'Content-Disposition: attachment'
  // Isso faz com que o navegador interno do Instagram/Facebook não consiga renderizar a página
  // e seja forçado a perguntar ao usuário com qual app ele deseja abrir (Chrome, etc)
  // ou simplesmente abrir no navegador do sistema.
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="abrir-site.html"');
  
  const targetUrl = decodeURIComponent(url);
  
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Redirecionando...</title>
      <meta http-equiv="refresh" content="0;url=${targetUrl}">
    </head>
    <body>
      <p>Redirecionando para o site...</p>
      <script>
        window.location.href = "${targetUrl}";
      </script>
    </body>
    </html>
  `);
}
