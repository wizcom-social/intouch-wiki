---
title: Backup - Restore
description: ""
summary: ""
date: 2024-10-04T11:53:57+03:00
lastmod: 2024-10-04T11:53:57+03:00
draft: false
weight: 280
toc: true
seo:
  title: ""
  description: ""
  canonical: ""
  noindex: false
---

## Restore and Edit a new Database

Ανοίγουμε το SQL management studio και κάνουμε τα εξής:

---

**Διαγραφή παραγγελιών**

```sql
DELETE [dbo].[Order]
```

---

**Διαγραφή βαρδιών**

```sql
DELETE [dbo].[WorkShift]
```

---

**Επαναφορά πόστων**

```sql
UPDATE [dbo].[TablePost] SET CurrentUserId=NULL
```

---

**Επαναφορά τραπεζιών**

```sql
UPDATE [dbo].[Table] SET StateId=0
```

---

**Επαναφορά αριθμού παραγγελιών**

```sql
UPDATE [dbo].[OrderType] SET Counter=0
```

---

**Διαγραφή όλων των πελατών delivery**

```sql
DELETE FROM [dbo].[DeliveryAddress]
DELETE FROM [dbo].[TraderPhone]
DELETE FROM [dbo].[CallEntry]
DELETE FROM [dbo].[Trader] WHERE Code<>'0000001'
```

**Διαγραφή όλων των χρηστών πλην του Administrator**

```sql

IF EXISTS (SELECT * FROM [dbo].[User] WHERE (UserName = 'ADMINISTRATOR' AND IsAdministrator = 1 AND CanLogin = 1 AND IsActive = 1))
BEGIN
DELETE FROM [dbo].[User]
WHERE Id NOT IN (
SELECT TOP 1 Id FROM [dbo].[User]
WHERE (UserName = 'ADMINISTRATOR' AND IsAdministrator = 1 AND CanLogin = 1 AND IsActive = 1)

)

END
ELSE
DELETE FROM [dbo].[User]
WHERE Id NOT IN (
SELECT TOP 1 Id FROM [dbo].[User]
WHERE (IsAdministrator = 1 AND CanLogin = 1 AND IsActive = 1)

)
```
