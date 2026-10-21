# Hoverboard Hero

Ein 2D-Side-Scroller für den Handy-Browser: Du wählst eines von sechs Kids, fliegst auf dem Hoverboard durch die Grossstadt und stoppst mit dem Dart-Blaster eine Alien-Invasion.

Das ganze Spiel steckt in einer einzigen Datei (`index.html`) und braucht keine Engine, keine Bilder und keinen Build-Schritt. Grafik und Sound werden im Browser erzeugt (Canvas und WebAudio).

## Spielen

`index.html` im Browser öffnen, am besten auf dem Handy im Querformat. Mit GitHub Pages (Settings → Pages → Branch `main`, Ordner `/`) wird das Spiel unter https://mikeddd1337.github.io/hoverboard-hero/ öffentlich spielbar.

## Als App installieren

Das Spiel ist eine installierbare Web-App (PWA). Nach dem ersten Laden läuft es auch offline.

- **Android (Chrome):** Auf dem Startbildschirm erscheint „Als App installieren“. Alternativ im Browser-Menü „App installieren“ wählen.
- **iPhone (Safari):** Teilen-Symbol antippen, dann „Zum Home-Bildschirm“.

Die App startet danach im Vollbild und im Querformat. Für die Installation muss das Spiel über HTTPS geladen werden, zum Beispiel über GitHub Pages.

### Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Das ganze Spiel |
| `manifest.webmanifest` | App-Name, Icons, Vollbild, Querformat |
| `sw.js` | Service Worker für den Offline-Betrieb. Bei Änderungen an gecachten Dateien `VERSION` erhöhen |
| `icons/` | App-Icons (192, 512, 1024 px, maskable, Apple) |
| `fonts/` | Bungee und Rubik, beide unter der SIL Open Font License (Lizenztexte liegen bei) |

## Figuren

Nach dem Start wählst du deine Figur. Alle spielen sich gleich, nur der Look ist anders. Die Auswahl wird im Browser gespeichert und kann nach jedem Game Over über „Figur wechseln“ geändert werden.

| Figur | Look |
|---|---|
| Louie | Blonde Haare, blaue Cap, rotes Hoodie, cyan Board |
| Lina | Blonder Pferdeschwanz, pinke Cap, lila Jacke, pinkes Board |
| Noah | Locken, grüne Mütze, gelbes Hoodie, grünes Board |
| Aylin | Lange schwarze Haare, türkises Hoodie, oranges Board |
| Jonas | Rote Stachelhaare, roter Helm, grünes Shirt, gelbes Board |
| Zoe | Zwei Afro-Puffs, oranges Shirt, lila Board |

In der Auswahl: Karte antippen zum Wählen, nochmal antippen oder „LOS!“ zum Starten. Mit der Tastatur: Pfeiltasten und Enter.

## Intro

Nach der Figurenauswahl erzählen drei gezeichnete Szenen die Vorgeschichte, mit dem gewählten Kid in der Hauptrolle:

1. **Das Geschenk:** Zum Geburtstag gibt es einen Dart-Blaster, im Kinderzimmer wird auf die Zielscheibe geschossen.
2. **Der Absturz:** Aliens tauchen vor dem Fenster auf, eines kracht mit seinem Hoverboard durchs Fenster.
3. **Auf die Jagd:** Das Kid schnappt sich das Hoverboard und fliegt hinaus in die Stadt.

Antippen zeigt den Text sofort ganz bzw. blättert weiter. „Überspringen“ (oder Esc) startet direkt das Spiel. Nach einem Game Over startet „Nochmal“ ohne Intro.

## Steuerung

| | Handy | Computer |
|---|---|---|
| Fliegen | Linke Bildschirmhälfte: Daumen ziehen | Maus bewegen oder WASD / Pfeiltasten |
| Schiessen | Rechte Bildschirmhälfte: gedrückt halten | Klicken oder Leertaste |
| Pause | Pause-Knopf oben rechts | P oder Esc |
| Ton an/aus | Lautsprecher-Knopf | M |

## Inhalt

- Parallax-Stadt mit Tag-Nacht-Wechsel
- Hindernisse: Werbe-Zeppeline und Kranlasten
- Power-ups: Dreifach-Schuss, Schnellfeuer, Schutzschild, Extra-Leben
- Combo-Multiplikator bis x5 und ein Highscore, der im Browser gespeichert wird

### Aliens

| Alien | Ab Sekunde | Verhalten |
|---|---|---|
| Schleim-Blob | 0 | Fliegt in Wellen, 1 Treffer |
| UFO | 10 | Bleibt stehen und schiesst gezielt, 2 Treffer |
| Teiler | 18 | Pinker Schleim, zerfällt beim Abschuss in zwei Mini-Blobs, 2 Treffer |
| Tintenfisch | 24 | Zielt kurz und stürzt dann auf dich zu, 1 Treffer |
| Panzerkäfer | 32 | Blockt Darts von vorne mit seinem Schild. Wenn er es öffnet, feuert er drei Schüsse und ist verwundbar, 4 Treffer |
| Phantom | 42 | Teleportiert sich, schiesst nach jedem Erscheinen und ist nur sichtbar verwundbar, 2 Treffer |

### Mutterschiffe

Etwa alle 60 Sekunden greift ein Mutterschiff an. Die drei Typen kommen der Reihe nach und werden jedes Mal stärker.

1. **Kraken-Kreuzer:** Tentakel-Schiff mit Schlitzauge. Fächert einen Kugelstrahl hin und her, schiesst gezielte Dreier-Salven und setzt Tintenfische aus.
2. **Pyramiden-Auge:** Goldene Pyramide. Lädt einen Laserstrahl über die ganze Bildschirmbreite auf (rote Warnlinie), schiesst zielsuchende Energiekugeln und breite Fächer.
3. **Ring-Station:** Rotierender Ring mit Alien-Kern. Schiesst Ringe in alle Richtungen, legt Minen, die in acht Splitter zerplatzen, und ruft Phantome.

## Schwierigkeit

Gegenüber der ersten Version ist das Spiel rund 20 % schwerer: Gegner und Geschosse sind schneller, Wellen kommen häufiger, Bosse halten mehr aus und die Unverwundbarkeit nach einem Treffer ist kürzer.
