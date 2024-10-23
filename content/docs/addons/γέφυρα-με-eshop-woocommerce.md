---
title: Γέφυρα με eshop woocommerce
description: Γέφυρα με eshop woocommerce
summary: '""'
date: 2024-10-18T14:43:00+03:00
lastmod: 2024-10-18T14:43:00+03:00
draft: false
weight: 330
toc: true
seo:
  noindex: false
  title: Γέφυρα με eshop woocommerce
  description: Γέφυρα με eshop woocommerce
---

## WooCommerce

Συνδεόμαστε με admin στο wooCommerce site και πηγαίνουμε στο WooCommerce/Settings

Στην καρτέλα General: ενεργοποιούμε το “_Enable tax rates and calculations_”

Στην καρτέλα Tax: Αλλάζουμε τα:

```bash
“Prices entered with tax”: “Yes, I will enter prices inclusive of tax”

“Display prices in the shop”: “Including tax”

“Display prices during cart and checkout”: “Including tax”
```

- Στην καρτέλα _Advanced_, πηγαίνουμε στο _REST API_ και προσθέτουμε ένα key με Read/Write permissions.
- Για να μπορούμε να κάνουμε upload τις εικόνες κάνουμε εγκατάσταση το [Basic-Auth](https://github.com/WP-API/Basic-Auth)
- Για Brands κάνουμε εγκατάσταση το [WooCommerce Brands](https://woocommerce.com/products/brands/)
- Για τιμές χονδρικής κάνουμε εγκατάσταση το [WooCommerce Wholesale Prices](https://wholesalesuiteplugin.com/free-woocommerce-wholesale-prices-plugin/)
- Για μεταφορικά κάνουμε εγκατάσταση [WooCommerce Shipping & Tax](https://wordpress.org/plugins/woocommerce-services/)

## inTouch

Από το εικονίδιο της διαχείρισης μπαίνουμε στην καρτέλα Commerce και επιλέγουμε Ρυθμίσεις Commerce

![commerce](/images/commerce.jpg "commerce")

Στο παράθυρο που ανοίγει επιλέγουμε _Νέα καταχώριση_ και συμπληρώνουμε τα πεδία.

![woocommerce](/images/webedit.jpg "whocommerce")

Συμπληρώνουμε τα στοιχεία της φόρμας «Ρυθμίσεις Commerce» ως εξής:

- **Ονομασία:** \[Εισάγεται ένα όνομα]
- **Τύπος e-Commerce:** WooCommerce
- **Client ID:** Το Consumer key που δημιουργήσαμε στο woocommerce
- **Secret:** Το Consumer secret που δημιουργήσαμε στο woocommerce
- **Auth User:** Το username του wordpress
- **Password:** Το password του wordpress
- **Server URI:** Το domain του site ΑΚΟΛΟΥΘΟΥΜΕΝΟ ΑΠΟ /
- **Server Port:** 443
- **Local Port: 0**

Συμπληρώνουμε τα στοιχεία της φόρμας «Ρυθμίσεις Intouch (Εμπορικό» ως εξής:

- **Εταιρία (Χρήση):** \[Επιλέγουμε την πιο πρόσφατη χρήση]
- **Κωδ. Παραγγελίας Λιανικής:** \[Βάζουμε το αναγνωριστικό παραστατικού που δημιουργήσαμε πριν]
- **Κωδ. Παραγγελίας Χονδρικής:** \[Βάζουμε το αναγνωριστικό παραστατικού που δημιουργήσαμε πριν]
- **Κωδ. Είδους εξόδων μεταφορικών:** \[Βάζουμε τον κωδικό του προϊόντος από την αποθήκη μας «ΕΞΟΔΑ ΜΕΤΑΦΟΡΙΚΩΝ». Αν δεν υπάρχει ήδη θα πρέπει να το δημιουργήσουμε στην Αποθήκη του InTouch.]
- **Κωδ. Είδους τρόπου πληρωμής**: \[Βάζουμε τον κωδικό από τις μεθόδους πληρωμής «ΑΝΤΙΚΑΤΑΒΟΛΗ»]

Επιλέγουμε στην καρτέλα «Συγχρονισμός» τι θέλουμε να στέλνει και τι να παραλαμβάνει.

**Πατάμε Αποθήκευση.**
