---
title: Εγκατάσταση SQL Server
description: ""
summary: ""
date: 2024-10-04T11:53:57+03:00
lastmod: 2024-10-04T11:53:57+03:00
draft: false
weight: 220
toc: true
seo:
  title: ""
  description: ""
  canonical: ""
  noindex: false
---

Η εγκατάσταση του Microsoft SQL Server αποτελεί ένα κρίσιμο βήμα για τη δημιουργία μιας ισχυρής και αξιόπιστης πλατφόρμας διαχείρισης δεδομένων. Ο SQL Server είναι ένα προηγμένο εργαλείο που χρησιμοποιείται ευρέως για την αποθήκευση, οργάνωση και ανάκτηση δεδομένων.

## Νέα εγκατάσταση SQL Server stand-alone

{{< picture src="../assets/images/sql/sql-setup-sa-1.png" alt="" >}}

---

{{< picture src="../assets/images/sql/sql-setup-sa-2.png" alt="" >}}

---

Αποεπιλέγουμε τα **R & Python**

και αλλάζουμε τον φάκελο εγκατάστασης σε **C:\MicrosoftSQLServer**

{{< picture src="../assets/images/sql/sql-setup-sa-3.png" alt="" >}}

---

Ορίζουμε Named instance: **SQL2017**

{{< picture src="../assets/images/sql/sql-setup-sa-4.png" alt="" >}}

---

Επιλέγουμε Collation: **Greek_CI_AS**

{{< picture src="../assets/images/sql/sql-setup-sa-5.png" alt="" >}}

---

Ορίζουμε sa password: **!n0rd3rP0s**

{{< picture src="../assets/images/sql/sql-setup-sa-6.png" alt="" >}}

---

Επιλέγουμε **TCP/IP**

{{< picture src="../assets/images/sql/sql-setup-sa-7.png" alt="" >}}

## Παραμετροποίηση & ρυθμίσεις του SQL

---

Ανοίγουμε το SQL Server Network Configuration > Protocols for SQL2017
{{< picture src="../assets/images/sql/sql-conf-sa-1.png" alt="" >}}

---

και κάνουμε το **Enabled > YES**

{{< picture src="../assets/images/sql/sql-conf-sa-2.png" alt="" >}}

---

- Βάζουμε σε όλα τα **IP Enabled Yes**
- TCP Dynamic Port **(Κενό)**
- TCP Port **1433**

{{< picture src="../assets/images/sql/sql-conf-sa-3.png" alt="" >}}

## Εγκατάσταση Studio Management

{{< picture src="../assets/images/sql/sm-setup-1.png" alt="" >}}
