# Minimal Counter

Minimal Counter è un contatore moderno e accessibile. Il progetto è costruito interamente in HTML, CSS E JavaScript e ha come obiettivo quello di offrire un'interfaccia utente pulita e facilmente accessibile anche dagli screen reader.

## Funzionalità

- **Operazioni di base:** i tre pulsanti consentono di incrementare, decrementare e resettare il contatore.
- **Feedback Visivo:** il numero che compare sullo schermo cambia colore in verde acceso quando è multiplo di 10. Gli effetti di hover e click sui pulsanti sono presenti ma in modo discreto, in modo da preservare l'idea essenziale dell'applicazione.
- **Responsive Design:** l'interfaccia si adatta a qualsiasi dispositivo e ha come larghezza minima 320px, in modo che non si rompa il layout dell'applicazione anche nel caso in cui visualizzata sugli schermi più piccoli.
- **Accessibilità per utenti ipovedenti o con disabilità visiva:**
  - l'uso dell'attributo `aria-label` sui pulsanti `+` e `-` permette allo screen reader di descrivere l'azione che l'utente può compiere, pronunciando la parola "Decrementa" o "Incrementa".
  - gli attributi `aria-live="polite"` e `aria-atomic="true"` mettono lo screen reader nelle condizioni di reagire al cambiamento dinamico sulla pagina (incremento o decremento del numero) e di leggere il numero che compare sullo schermo nella sua interezza.

## Tecnologie utilizzate

- **HTML5:** struttura semantica dell'applicazione e tag per l'accessibilità.
- **CSS3:** layout pulito, fluido e minimalista allineato con Flexbox.
- **Javascript:** funzionalità dinamiche dell'applicazione attraverso la manipolazione del DOM.

## Utilizzo

L'applicazione è pronta per essere utilizzata ed è accessibile a questo [link](https://minimal-counter.netlify.app/)

## Contatti

[giuliocarboni.github.io](https://giuliocarboni.github.io/)
