"""
Shows basic usage of the Sheets API. Prints values from a Google Spreadsheet.
"""
from __future__ import print_function
from apiclient.discovery import build
from httplib2 import Http
from oauth2client import file, client, tools
from validate_email import validate_email

def getEmails():
    emails = []

    # Setup the Sheets API
    SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly'
    store = file.Storage('credentials.json')
    creds = store.get()
    if not creds or creds.invalid:
        flow = client.flow_from_clientsecrets('client_secret.json', SCOPES)
        creds = tools.run_flow(flow, store)
    service = build('sheets', 'v4', http=creds.authorize(Http()))

    # Call the Sheets API
    # SPREADSHEET_ID = '1PGx2D6OLYHEm3S9HmtMgYQ8xP6SBiivIICiLu5SWgXA'
    SPREADSHEET_ID = '1eQDmc7PMPQZkXfvVSBLnDGT7p4eSBj4Y_6L3BBL-Ffc'
    # RANGE_NAME = 'Hoja 1!B5:I199'
    RANGE_NAME = 'Sheet1!A1:A4'
    result = service.spreadsheets().values().get(spreadsheetId=SPREADSHEET_ID,
                                                range=RANGE_NAME).execute()
    values = result.get('values', [])
    if not values:
        print('No data found.')
    else:
        print('Emails:')
        for row in values:
            # Print columns A and E, which correspond to indices 0 and 4.
            for mail in row:
                try:
                    if validate_email(mail):
                        emails.append(mail)
                    
                except Exception:
                    print('Error al imprimir el email')
    
    return emails