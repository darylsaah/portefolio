# Portfolio etudiant - Daryl Saah

Portfolio statique (HTML/CSS/JS), inspire du CV fourni.

## Lancer en local

Option simple:

1. Ouvrir le dossier dans Cursor.
2. Ouvrir `index.html` dans le navigateur.

Option recommandee (serveur local):

```powershell
cd c:\Users\Admin\Desktop\portfoliod
python -m http.server 5500
```

Puis ouvrir: <http://localhost:5500>

## Deploiement (hebergement)

### Netlify

1. Aller sur [https://app.netlify.com/](https://app.netlify.com/)
2. Importer le dossier ou connecter un repo GitHub
3. Build command: laisser vide
4. Publish directory: `.`

### Vercel

1. Aller sur [https://vercel.com/new](https://vercel.com/new)
2. Importer le projet
3. Framework preset: `Other`
4. Output directory: `.`

### GitHub Pages

1. Pousser les fichiers sur un repo GitHub
2. Dans `Settings > Pages`, choisir la branche principale et `/ (root)`
3. Sauvegarder, puis utiliser l'URL generee par GitHub Pages

## Personnalisation rapide

- Photo: ajouter une image dans le dossier et l'inserer dans `index.html`
- Couleurs: modifier les variables dans `styles.css` (`:root`)
- Projets: adapter la section `#projets` dans `index.html`
- CV PDF: deposer le fichier `Daryl-Saah-CV.pdf` a la racine du projet pour que le bouton "Telecharger mon CV" fonctionne
- Contact: le formulaire est visuel uniquement (pas de backend)
