# Hoverboard Hero

Ein 2D-Side-Scroller für den Handy-Browser: Ein Junge fliegt auf seinem Hoverboard durch die Grossstadt und stoppt mit seiner Nerv-Gun eine Alien-Invasion.

Das ganze Spiel steckt in einer einzigen Datei (`index.html`) und braucht keine Engine, keine Bilder und keinen Build-Schritt. Grafik und Sound werden im Browser erzeugt (Canvas und WebAudio).

## Spielen

`index.html` im Browser öffnen, am besten auf dem Handy im Querformat. Mit GitHub Pages (Settings → Pages → Branch `main`, Ordner `/`) wird das Spiel unter einer öffentlichen Adresse spielbar.

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
