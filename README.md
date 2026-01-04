# Git Workflow - Lokale Schritte

Folgende Schritte müssen lokal durchgeführt werden:

## 1. Änderungen stagen
```bash
git add .
```
- Alle Änderungen werden für den Commit vorbereitet (gestaged)

## 2. Änderungen lokal committen
```bash
git commit -m "AenderungInDer N18i"
```
- Änderungen sind nun dauerhaft lokal im Git gespeichert
- Der Parameter `-m` steht für "message" und erlaubt es, dem Commit einen Namen zu geben

## 3. Änderungen in GitHub hochladen
```bash
git push -u origin ErsteArbeit
```
- Änderungen werden auf GitHub hochgeladen
- Der Parameter `-u` verknüpft den lokalen Branch mit dem Remote-Branch
- `origin` ist der Name des Remote-Repositories
- `ErsteArbeit` ist der Name des Branches, auf den die Änderungen geschrieben werden

## 4. Branch lokal löschen
git branch -d <branch-name> --> für bereits gemergte Branches
git branch -D <branch-name> --> für NICHT gemergte Branches

## 5. Branch lokal neu anlegen
git checkout - b neuer-branch    --> neuen Branch anlegen und gleich dahin wechseln
git branch <branch-name>         --> nur erstellen ohne zu wechseln (macht man eigentlich nicht)}

<hr>

## 1. Server starten
- Rechtsklick auf index.html
- "Open with Live Server" wählen
