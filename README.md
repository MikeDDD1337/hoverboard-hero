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
- Gegner: Schleim-Blobs, schiessende UFOs, Tintenfische, die auf dich zustürzen
- Etwa alle 60 Sekunden ein Mutterschiff als Boss
- Hindernisse: Werbe-Zeppeline und Kranlasten
- Power-ups: Dreifach-Schuss, Schnellfeuer, Schutzschild, Extra-Leben
- Combo-Multiplikator bis x5 und ein Highscore, der im Browser gespeichert wird
