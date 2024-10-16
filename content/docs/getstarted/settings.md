---
title: Προαπαιτούμενα
description: Προαπαιτούμενα
summary: ""
date: 2024-10-16T13:04:00+03:00
lastmod: 2024-10-16T13:33:00+03:00
draft: false
weight: 120
toc: true
seo:
  title: Οδηγίες εγκατάστασης
  description: Οδηγίες εγκατάστασης
  canonical: ""
  noindex: false
---

## Εγκατάσταση προαπαιτούμενου λογισμικού

- [Εγκατάσταση .NET 3.5](http://www.microsoft.com/en-us/download/details.aspx?id=25150)
- [Εγκατάσταση .NET 4.6:](http://www.microsoft.com/en-us/download/details.aspx?id=17718)
- [Microsoft Visual C++ 2015 Redistributable Update 3 RC:](https://www.microsoft.com/en-US/download/details.aspx?id=52685)
- [Crystal Reports:](https://www.dropbox.com/s/jmgeglz7awnf0x9/CRRuntime_32bit_13_0_25.msi?dl=1)
- [POS for .NET 1.14](https://www.microsoft.com/en-us/download/details.aspx?id=42081)

  Κατεβάζουμε το αρχείο και κάνουμε Complete installation.

- [OPOS Common Control Objects 1.13.003](http://www.monroecs.com/files/OPOS_CCOs_1.13.003.msi)

Αν στον υπολογιστή είναι προεγκατεστημένη νεότερη έκδοση του .NET δεν χρειάζεται να βάλουμε την 4.6. Η εγκατάσταση της .NET 3.5 είναι απαραίτητη
ασχέτως αν έχουμε την πιο πρόσφατη .NET.

## Εγκατάσταση SQL

- [Download SQL 2019 Express](https://www.microsoft.com/en-us/download/confirmation.aspx?id=101064)

Κάνουμε την εγκατάσταση, στον κωδικο **sa** βαζουμε : **!nTouchP0$**

- [SSMS (SQL Management)](https://aka.ms/ssmsfullsetup)

Κάνουμε την εγκατάσταση

## Δημιουργία βάσης SQL

Κατεβάζουμε μία κενή [βάση inTouch](https://drive.google.com/file/d/118rosCFKAwupg7Gjl1RG9J3d3NIyI3Ws/view?usp=sharing) και την αποθηκεύουμε στο φάκελο **backup** στο ακόλουθο path:

```bash
C:\Microsoft SQL Server\MSSQL12.SQL2019\MSSQL\Backup
```

Ανοίγουμε το SQL Server Management Studio και εισάγουμε την database:

- Στα αριστερά , στην καρτέλα Object Explorer, κάνουμε δεξί κλικ στην επιλογή DATABASES

- DATABASES -> RESTORE DATABASE

- Ανοίγει ένα παράθυρο και στην σελίδα General επιλέγουμε Device

- Στα δεξιά κάνουμε κλικ τις 3 τελείες (…) και με add επιλέγουμε την βάση μας.

- Θα εμφανιστεί «Database “Intouchdb“ restored successfully».

## SQL Configuration

Ανοίγουμε το SQL Server 2019 Configuration Manager

- Επιλέγουμε την καρτέλα Protocols for SQL2019
- TCP/IP Disabled -> Enabled
- Διπλό κλικ TCP/IP και επιλέγουμε την καρτέλα IP Addresses
- ΟΛΑ ΤΑ ENABLED από NO -> YES
- ΣΒΗΝΟΥΜΕ ΤΑ 0 ΑΠΟ ΟΛΑ ΤΑ TCP Dynamic Ports και το αφήνουμε ΚΕΝΟ
- Σε όλα τα πεδία TCP Port βάζουμε 1433
