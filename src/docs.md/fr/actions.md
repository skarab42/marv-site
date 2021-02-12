# Actions

## Liste des actions

### OBS | Liste des scènes
Affiche la liste des scènes disponible dans OBS.  
Si vous cliquez sur une scène inactive dans la liste alors vous activez la scène sur OBS.
#### Paramètres
- Déclenchement : [voir la liste](/fr/docs/actions#declenchements)
- Evenement : [voir la liste](/fr/docs/actions#evenements)
#### Informations
Il n'y que les évenements **Aucun** et **Command** qui fonctionne pour le moment

### OBS | Aller à la scène
Affiche une scene précise disponible dans OBS.  
Si vous cliquez sur le bouton alors vous activez la scène sur OBS.
#### Paramètres
- Scène : choix de la scene disponible sur OBS 
- Déclenchement : [voir la liste](/fr/docs/actions#declenchements)
- Evenement : [voir la liste](/fr/docs/actions#evenements)

### OBS | Basculer entre deux scènes
Affiche deux scenes précises disponible dans OBS.  
Si vous cliquez sur le bouton alors vous activez la scène qui n'était pas active sur OBS.
#### Paramètres
- Scène 1 : choix de la scene disponible sur OBS
- Scène 2 : choix de la scene disponible sur OBS
- Déclenchement : [voir la liste](/fr/docs/actions#declenchements)
- Evenement : [voir la liste](/fr/docs/actions#evenements)

### Anime | Timeline
Animation avec une timeline
#### Paramètres
- Editeur de timeline : [voir la documentation](/fr/docs/timeline)
- Déclenchement : [voir la liste](/fr/docs/actions#declenchements)
- Evenement : [voir la liste](/fr/docs/actions#evenements)

### Twitch chat
Affiche le chat Twitch d'une chaine donnée
#### Paramètres
- Chaine : nom de la chaine Twitch
  - par défaut c'est la chaine du compte Twitch connecté
- Theme : couleur du thème
  - dark
  - light
#### Informations
Pour intéragir dans le widget il ne faut pas être en mode **EDITION**.  
Après ajout de l'action il est conseillé d'agrandir la taille du bouton pour pouvoir cliquer sur le bouton **d'acceptation des cookies**.

### Twitch stream
Affiche le live Twitch d'une chaine donnée
#### Paramètres
- Chaine : nom de la chaine Twitch
  - par défaut c'est la chaine du compte Twitch connecté
- Rendre muet : pour ne pas avoir le son de la vidéo
- Lecture automatique : pour directement lancer la lecture

### Récompenses
**Pour les streamers affiliés / partenaires seulement**  
Affiche la liste des récompenses réclamé par les points de chaines

### Commandes
Affiche la liste des commandes du chat définis dans Marv.  
La configuration se fait en deux étapes.  
#### Paramètres
- Préfixe : le début de la commande  
Ce n'est pas obligatoire de commencer avec le **!**.
#### Informations
Quand le widget est créé vous avez un menu pour ajouter des commandes à votre préfixe.
Pour chaque commande vous pouvez : 
- activer / désactiver la commande
- modifier ses paramètres
- supprimer la commande
#### Paramètres de la commande
- Commande : la fin du texte de la commande qui sera complété par le préfixe de votre widget
- Variables : les `x` mots après la commande sont injecter dans les `x` variables définies dans ce champ
  - exemple :  
    La commande `!position` prends deux paramètres x et y.  
    Dans variables je mets `x y`.
    Quand je reçois le message `!position 12 56` alors `x` contient `12` et `y` contient `56`
- Description : description affiché à côté de la commande dans le widget
- Cooldown : nombre de secondes avant de pouvoir réutiliser la commande
- Message : message qui sera envoyé dans le chat
  - [support de la syntaxe ejs](https://ejs.co/#docs)

### Supporters
**Pour les streamers affiliés /partenaires seulement**  
Affiche la liste des abonnés les plus récents

## Déclenchements
Spécifie quand l'action doit être exécutée  
- immédiat : annule tout ce qui est court
- queue : se rajoute à une file d'attente
- asap : se déclenche dès que possible

## Evenements
**Pour tous les streamers**
- Aucun
- Action : c'est un message de type action du chat pouvant avoir par exemple la forme /me <message>
- Ban : quand on bannit un utilisateur du chat
- Command : spécifique aux commandes définies dans Marv
- Follow : quand un utilisateur suit la chaîne
- Hosted : quand la chaine est hosté par autre utilisateur
- Join : quand un utilisateur rejoint le chat
- Message : quand un utilisateur envoi un message sur le chat
- Part : quand un utilisateur quitte le chat
- Raid : quand un utilisateur raid la chaine

**Pour les streamers affiliés / partenaires seulement**
- Bits : quand un utilisateur envoi des bits
- Bits badge upgrade : quand un utilisateur améliore son badge en envoyants des bits
- Community pay forward : ???
- Community sub : quand un utilisateur offre des abonnements à d'autres utilisateurs
- Gift paid upgrade : quand un utilisateur a reçu un abonnement en cadeau qu'il le prolonge
- Prime community gift : quand un utilisateur offre un abonnement prime à un autre utilisateur
- Prime paid upgrade : quand un utilisateur a un abonnement prime qu'il le prolonge
- Redemption : quand un utilisateur réclame une récompense avec ses points de chaine
- Reward gift : ???
- Ritual : ???
- Standard pay forward : ???
- Sub : quand un utilisateur achete un abonnement
- Sub extend : quand un utilisateur prolonge son abonnement
- Sub gift : quand un utilisateur offre un abonnement à un autre utilisateur