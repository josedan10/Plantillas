#!/usr/bin/python
import urllib
import smtplib

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

import getEmails

f = urllib.request.urlopen('file:///C:/Users/josed/Documents/Plantillas/mailMarketing/text.html')
html = f.read().decode('utf-8')

server = smtplib.SMTP('smtp.gmail.com', 587)
sender = input('Ingrese el correo del que desea enviar el mensaje: ')

server.connect("smtp.gmail.com",587)
server.ehlo()
server.starttls()
server.ehlo()

#Next, log in to the server
server.login(sender, "Euclides.Log17")

#Send the mail
msg = MIMEMultipart('alternative')
msg["Subject"] = "Prueba leyendo google sheets"
msg["From"] = sender
msg["To"] = ", ".join(getEmails())
text = "Prueba. (Este mensaje fue enviado usando python)" 

msg.attach(MIMEText(html, "html"))

for email in emails:
    server.sendmail(sender, email, msg.as_string())

server.quit()
print("Mensaje enviado\n")