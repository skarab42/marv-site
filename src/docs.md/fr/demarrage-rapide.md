# Démarrage rapide

## Installer Marv

### Windows :
Vous pouvez télécharger la dernière version de Marv [ici](https://github.com/skarab42/marv/releases/download/v1.7.0/Marv-Setup-1.7.0.exe).

Cliquez sur l'installateur et laissez vous guider.



### Linux :

Vous pouvez télécharger la dernière version de Marv [ici](https://github.com/skarab42/marv/releases/download/v1.7.0/Marv-1.7.0.AppImage). Attention, pour pouvoir utiliser Marv, vous devez utiliser au minimum OBS 25.0.7, afin d'avoir le support des sources navigateur.  Pour être sûr d'avoir la dernière version, ajoutez le repository officiel suivant : 

```bash
sudo add-apt-repository ppa:obsproject/obs-studio
```

(Instructions d'installation détaillées [ici](https://obsproject.com/wiki/install-instructions#linux).


#### Installation en ligne de commande :

```bash
$  mkdir marv
$  mv Marv-x.y.z.AppImage marv
$  cd marv
$  chmod u+x Marv-x.y.z.AppImage
```

Vous pouvez lancer Marv en ligne de commande avec :

```bash
./Marv-x.y.z.AppImage
```

#### Installation graphique :

1. télécharger appImage - linux (https://github.com/skarab42/marv/releases/download/v1.7.0/Marv-1.7.0.AppImage)
2. mettre l'image dans dossier dédié
3. clic droit sur l'appimage -> propriétés -> Permissions -> Cocher Autoriser l'exécution du fichier comme un programme (en ligne de commande, chmod 755 Marv-1.7.0.AppImage)
4. cliquer sur l'appImage pour lancer Marv


Pour créer un raccourci : sur le bureau (par exemple) faire clic droit -> créer un nouveau lanceur ici. Puis, le nommer Marv et chercher le lien vers le fichier AppImage.


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
   
5. Assurez vous de placer correctement l'overlay dans votre scène et notez ses dimensions, elles vous permettront de paramétrer correctement vos animations plus tard.


## Installer OBS Websocket

Si vous voulez contrôler OBS avec Marv (changement de scène, mute, etc...), vous devez installer [OBS Websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/).

**Téléchargement**: [Windows](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-Windows-Installer.exe) | [Linux](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-1_amd64.deb) | [macOS](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-macOS.pkg)

Pour configurer le plugin websocket dans obs : aller dans **outils** => **paramètres du serveur Websockets**.

Si vous n''avez pas paramétré de mot de passe pendant l'installation du plugin Websockets, pensez à déselectionner *activer l'authentification* dans les paramètres du serveur websockets.

## Recommandations

**Démarrer Marv _avant_ de démarrer OBS**

Dans le cas contraire, le message d'erreur suivant peut apparaitre.
![overlay non connecter](/assets/images/docs/overlay_disconnected_message.png)

Pour reconnecter l'overlay, désactivez et réactivez la visibilité de la source.
![overlay non connecter](/assets/images/docs/toggle_scene_visibility.png)


**Ne pas oublier de se connecter à Twitch dans Marv**

Au lancement de Marv, connectez vous à votre compte twitch. C'est indispensable pour avoir accès à certaines fonctionnalités (chat, commandes, etc).
