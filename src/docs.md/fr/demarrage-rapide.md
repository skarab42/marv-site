# Démarrage rapide

Avant de commencer, vous devez [télécharger](/fr/download) Marv et l'installer.

## Installer l'overlay dans OBS

Pour pouvoir afficher vos animations sur votre live vous devez ajouter une source navigateur dans OBS avec l'adresse de l'overlay de Marv.

1. Pour ajouter une source navigateur, Ouvrez OBS, cliquez sur le petit plus en bas a gauche de la liste de vos scènes.
   ![OBS scene list](/assets/images/docs/obs_scene_list.png)

2. Créer une nouvelle source navigateur et nomez la comme vous le désirez.
   ![OBS browser source](/assets/images/docs/obs_create_browser_source.png)

3. Dans le champ URL, entrez l'adresse suivante: **http://localhost:4242/overlay**
   ![OBS browser source](/assets/images/docs/obs_browser_source_config.png)

4. Il faut également cocher les deux cases:
   [✔] Désactiver la source quand elle n'est pas visible.
   [✔] Rafraîchir le navigateur lorsque la scène devient active.

## Installer OBS Websocket

Si vous voulez contrôler OBS avec Marv (changement de scène, mute, etc...), vous devez installer [OBS Websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/).

**Téléchargement**: [Windows](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-Windows-Installer.exe) | [Linux](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-1_amd64.deb) | [macOS](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-macOS.pkg)

Pour configurer le plugin websocket dans obs : aller dans **outils** => **paramètres du serveur Websockets**.

Si vous n''avez pas paramétré de mot de passe pendant l'installation du plugin Websockets, pensez à déselectionner *activer l'authentification* dans les paramètres du serveur websockets.

## Recommandations

**Démarer Marv _avant_ de démarrer OBS.**

Dans le cas contraire, le message d'erreur suivant peut apparaitre.
![overlay non connecter](/assets/images/docs/overlay_disconnected_message.png)

Pour reconnecter l'overlay, désactivez et réactivez la visibilité de la source.
![overlay non connecter](/assets/images/docs/toggle_scene_visibility.png)


**Noubliez pas de vous connecter à Twitch dans Marv**

C'est indispensable pour avoir accès à certains fonctionnalités (chat, commandes, etc).
