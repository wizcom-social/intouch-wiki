---
title: Ρυθμίσεις Email
description: Ρυθμίσεις λογαριασμών
summary: Ρυθμίσεις λογαριασμών
date: 2024-10-21T14:21:00+03:00
lastmod: 2025-01-20T12:00:00+02:00
draft: false
weight: 430
toc: true
seo:
  noindex: false
  title: Ρυθμίσεις Email
  description: Ρυθμίσεις Email
---
## Γενικές Ρυθμίσεις

Πηγαίνουμε στη `Διαχείριση` -> `Εταιρείες` -> `Λογαριασμοί Email`

![](/images/email-01.jpg)

Κάνουμε `Νέα καταχώρηση` (αν δεν υπάρχει καταχώρηση) διαφορετικά επεξεργαζόμαστε την υπάρχουσα . 

![](/images/email-02.jpg)

Συμπληρώνουμε τα εξής:

**Όνομα αποστολέα:** \[Το όνομα του αποστολέα του Email πχ Wizcom]

**Διεύθυνση ηλεκτρονικού ταχυδρομείου:** \[Την διεύθυνση του email μας που θέλουμε να στέλνει τα Email στους πελάτες]

**Κωδικός πρόσβασης**: \[Τον κωδικό του email]

**Διακομιστής εξερχ. Αλληλογραφίας SMTP**: \[Την διεύθυνση του SMTP server του Email provider (Πχ: smtp.gmail.com)]

**Θύρα διακομιστή:** \[Την θύρα του SMTP server του Email provider]

Πατάμε Αποθήκευση.

Μπορούμε να επεξεργαστούμε την εμφάνιση-διάταξη του Email (Πρότυπο Email) από το μενού Π*ρότυπα Email* που βρίσκεται στην καρτέλα βασικές ρυθμίσεις της διαχείρισης .

{{< callout context="tip" title="Προσοχή" icon="outline/alert-triangle" >}}
Ορισμένοι πάροχοι E-Mail όπως Gmail και Yahoo! Mail αποτρέπουν την σύνδεση απευθείας με άλλη εφαρμογή (Third-party App). Σε αυτή την περίπτωση πρέπει να εκδοθεί ειδικός κωδικός μέσα από τις ρυθμίσεις ασφαλείας του παρόχου. Οπότε αντί του κωδικού μας συμπληρώνουμε τον κωδικό που προμηθευτίκαμε από αυτή την διαδικασία.
{{< /callout >}}

![email settings](/images/email.jpg "email settings")

## Ρυθμίσεις  Microsoft, Outlook.com

Κάνουμε σύνδεση στο  [mysignins](https://mysignins.microsoft.com/) επιλέγουμε το `security info` και στη συνέχεια `Add sign-in method`

![](/images/screenshot_2.png)

* Επιλέγουμε `App Password`
* Δίνουμε ένα όνομα για την εφαρμογή που θέλουμε (πχ InTouch)
* Σε αυτό το βήμα έχει δημιουργηθεί αυτόματα ένας κωδικός.

  ![](/images/email-outlook-001.jpg)

Κάνουμε τις απαραίτητες ρυθμίσεις στο inTouch:

![](/images/email-outlook-002.jpg)

|                          |                       |
| ------------------------ | --------------------- |
| **Incoming Mail (IMAP)** |                       |
| Server                   | imap-mail.outlook.com |
| Port                     | 993                   |
| Encryption               | SSL                   |
| **Outgoing Mail (SMTP)** |                       |
| Server                   | smtp-mail.outlook.com |
| Port                     | 587                   |
| Encryption               | STARTTLS (or TLS)     |

## Ρυθμίσεις Google, gmail

Παρόμοια με την προηγούμενη περίπτωση για gmail συμπληρώνουμε:

|                          |                   |
| ------------------------ | ----------------- |
| **Incoming Mail (IMAP)** |                   |
| Server                   | imap.gmail.com    |
| Port                     | 993               |
| Encryption               | SSL               |
| **Outgoing Mail (SMTP)** |                   |
| Server                   | smtp.gmail.com    |
| Port                     | 587               |
| Encryption               | STARTTLS (or TLS) |

## Ρυθμίσεις Yahoo mail

Παρόμοια με τις προηγούμενες περιπτώσεις συμπληρώνουμε:

|                          |                     |
| ------------------------ | ------------------- |
| **Incoming Mail (IMAP)** |                     |
| Server                   | imap.mail.yahoo.com |
| Port                     | 993                 |
| Encryption               | SSL                 |
| **Outgoing Mail (SMTP)** |                     |
| Server                   | smtp.mail.yahoo.com |
| Port                     | 465                 |
| Encryption               | SSL                 |
