---
title: Εγκατάσταση SQL Server
description: Εγκατάσταση SQL Server
summary: Εγκατάσταση SQL Server
date: 2024-10-04T11:53:57+03:00
lastmod: 2024-10-24T11:04:00+03:00
draft: false
weight: 2200
toc: true
seo:
  title: ""
  description: ""
  canonical: ""
  noindex: false
---

Η εγκατάσταση του Microsoft SQL Server αποτελεί ένα κρίσιμο βήμα για τη δημιουργία μιας ισχυρής και αξιόπιστης πλατφόρμας διαχείρισης δεδομένων. Ο SQL Server είναι ένα προηγμένο εργαλείο που χρησιμοποιείται ευρέως για την αποθήκευση, οργάνωση και ανάκτηση δεδομένων.

## Νέα εγκατάσταση SQL Server stand-alone

![sql](/images/sql-setup-sa-1.png "sql")

---

![sql](/images/sql-setup-sa-2.png "sql")

---

Αποεπιλέγουμε τα **R & Python**

και αλλάζουμε τον φάκελο εγκατάστασης σε **C:\MicrosoftSQLServer**

![sql](/images/sql-setup-sa-3.png "sql")

---

Ορίζουμε Named instance: **SQL2017**

![sql](/images/sql-setup-sa-4.png "sql")

---

Επιλέγουμε Collation: **Greek_CI_AS**

![sql](/images/sql-setup-sa-5.png "sql")

---

Ορίζουμε sa password: **!nTouchP0$**

![sql](/images/sql-setup-sa-6.png "sql")

---

Επιλέγουμε **TCP/IP**

![sql](/images/sql-setup-sa-7.png "sql")

## Παραμετροποίηση & ρυθμίσεις του SQL

---

Ανοίγουμε το SQL Server Network Configuration > Protocols for SQL2017

![sql](/images/sql-conf-sa-1.png "sql")

---

και κάνουμε το **Enabled > YES**

![sql](/images/sql-conf-sa-2.png "sql")

---

- Βάζουμε σε όλα τα **IP Enabled Yes**
- TCP Dynamic Port **(Κενό)**
- TCP Port **1433**

![sql](/images/sql-conf-sa-3.png "sql")

## Εγκατάσταση Studio Management

![sql](/images/sm-setup-1.png "sql")

## Δημιουργία βάσης SQL

Κατεβάζουμε μία κενή [βάση inTouch](https://drive.google.com/file/d/118rosCFKAwupg7Gjl1RG9J3d3NIyI3Ws/view?usp=sharing) και την αποθηκεύουμε στο φάκελο **backup** στο ακόλουθο path:

```bash
C:\Microsoft SQL Server\MSSQL14.SQL2017\MSSQL\Backup
```

Ανοίγουμε το SQL Server Management Studio και εισάγουμε την database:

- Στα αριστερά , στην καρτέλα Object Explorer, κάνουμε δεξί κλικ στην επιλογή DATABASES
- DATABASES -> RESTORE DATABASE
- Ανοίγει ένα παράθυρο και στην σελίδα General επιλέγουμε Device
- Στα δεξιά κάνουμε κλικ τις 3 τελείες (…) και με add επιλέγουμε την βάση μας.
- Θα εμφανιστεί «Database “Intouchdb“ restored successfully».
