class Attendee:
    'Common base class for all attendees'

    def __init__(self, name, tickets):
        self.name = name
        self.tickets = tickets

    def displayAttendee(self):
        print('Name : {}, Tickets: {}'.format(self.name, self.tickets))

    def addTicket(self):
        self.tickets += 1
        print('{} tickets increased to {}'.format(self.name, self.tickets))

Attendee1=Attendee('ahmed',1)
Attendee2=Attendee('eid',2)
Attendee1.addTicket()
Attendee2.addTicket()
Attendee1.displayAttendee()
Attendee2.displayAttendee()