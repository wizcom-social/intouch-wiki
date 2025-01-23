---
title: Εγκατάσταση InTouch
description: Εγκατάσταση InTouch
summary: '""'
date: 2024-10-18T14:33:00+03:00
lastmod: 2024-10-18T14:33:00+03:00
draft: false
weight: 2300
toc: true
seo:
  noindex: false
  title: Εγκατάσταση InTouch
  description: Εγκατάσταση InTouch
---

Κατεβάζουμε την [τελευταία έκδοση του InTouch.](https://update.intouch.gr/versions/Intouch%20Setup%206.99.759%20-%202024.07.18.14.30.exe)

Τρέχουμε το εκτελέσιμο αρχείο.

Στην επιφάνεια εργασίας, έχουν δημιουργηθεί 2 εικονίδια (InTouch και InTouch Setup).

> To [inTouch Setup](#) είναι το εργαλείο με το οποίο μπορούμε να τροποποιήσουμε τη σύνδεση με τη βάση , δηλαδή το αρχείο **ConnectionStrings.xml** που βρίσκεται στο root folder του inTouch.

Οταν ζητήσει serial για την εφαρμογή συνδεόμαστε στο [wizcom account ](https://account.wizcom.gr) και κάνουμε copy το serial στην καρτέλα άδειες του πελάτη μας.

![wizcom account](/images/account-serial.jpg "wizcom account")

## Σύνδεση Βάσης Δεδομένων

Την πρώτη φορά που θα ανοίξουμε το inTouch θα πρέπει να συνδεθεί με την βάση μας. Εναλλακτικά μπορούμε να συνδεθούμε με το εργαλείο **inTouch setup** που αναφέραμε πριν.

![ChDB](/images/102.jpg "ChDB")

- Πατάμε “Συνδέσεις Βάσεων”
- “Νέα σύνδεση Β.Δ. “
- Ονομασία Σύνδεσης “InTouch”
- \[ Σύνδεση ]
- Ενημέρωση
- Επιλογή Βάσης Δεδομένων => “InTouch“
- Ενημέρωση

## Αναβάθμιση Βάσης Δεδομένων

Αφού ανοίξει η εφαρμογή θα μας ζητήσει Back Up επιλέγουμε **ΝΑΙ** και στο επόμενο παράθυρο **Αναβάθμιση**

![alt](/images/103.jpg "alt")

Όταν τελειώσει κλικ στο **ΟΚ**.
