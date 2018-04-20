#!/usr/bin/python
from __future__ import print_function
from apiclient.discovery import build
from httplib2 import Http
from oauth2client import file, client, tools
from validate_email import validate_email
import urllib.request
import smtplib

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from getEmails import getEmails

f = urllib.request.urlopen('file:///C:/Users/josed/Documents/Plantillas/mailMarketing/text.html')
html = f.read().decode('utf-8')

server = smtplib.SMTP('smtp.gmail.com', 587)

# destination = input('Ingrese el correo de la persona que va a recibir el mensaje: ')
sender = input('Ingrese el correo del que desea enviar el mensaje: ')

server.connect("smtp.gmail.com",587)
server.ehlo()
server.starttls()
server.ehlo()

#Next, log in to the server
server.login("josedanq100@gmail.com", "Euclides.Log17")

#Send the mail
emails = getEmails()
msg = MIMEMultipart('alternative')
msg["Subject"] = "Prueba leyendo google sheets"
msg["From"] = sender
print(msg["From"])
msg["To"] = ", ".join(emails)
text = "Prueba. (Este mensaje fue enviado usando python)" 

msg.attach(MIMEText(html, "html"))

# for email in emails:
server.sendmail(sender, 'josedanq100@gmail.com', msg.as_string())

server.quit()
print("Mensaje enviado\n")