import urllib.request
import smtplib

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

f = urllib.request.urlopen('file:///C:/Users/josed/Documents/Plantillas/mailMarketing/text.html')
html = f.read().decode('utf-8')

server = smtplib.SMTP('smtp.gmail.com', 587)

# destination = input('Ingrese el correo de la persona que va a recibir el mensaje: ')
# sender = input('Ingrese el correo del que desea enviar el mensaje: ')

destination = "josedanq100@gmail.com"
sender = "josedanq100@gmail.com"

server.connect("smtp.gmail.com",587)
server.ehlo()
server.starttls()
server.ehlo()

#Next, log in to the server
server.login(sender, "Euclides.Log17")

#Send the mail
msg = MIMEMultipart('alternative')
msg["Subject"] = "Prueba"
msg["From"] = 'info@equilibrio370.com'
msg["To"] = destination
text = "Prueba. (Este mensaje fue enviado usando python)" # The /n separates the message from the headers

# html = """\
# <html>
#   <head></head>
#   <body>
#     <h1>Saludos</h1>
#     <p>Hi!<br>
#        How are you?<br>
#        Here is the <a href="http://www.python.org">link</a> you wanted.
#     </p>
#   </body>
# </html>
# """

msg.attach(MIMEText(html, "html"))

server.sendmail(sender, destination, msg.as_string())
server.quit()
print("Mensaje enviado\n")