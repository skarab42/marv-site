démarrage rapide :


Ajout installation windows et linux

-----------------------------------

(problèmes d'installation linux)
how to install 
- linux :
     - Installation graphique :
        - 1) télécharger appImage - linux (https://github.com/skarab42/marv/releases/download/v1.7.0/Marv-1.7.0.AppImage)

        - 2) mettre l'image dans dossier dédié

        - 3) clic droit sur l'appimage -> propriétés -> Permissions -> Cocher Autoriser l'exécution du fichier comme un programme
          (en ligne de commande, chmod 755 Marv-1.7.0.AppImage)

        - 4) clique sur l'appImage pour lancer Marv

      - En ligne de commande :
        mkdir marv
        mv Marv-x.y.z.AppImage marv
        cd marv
        chmod u+x Marv-x.y.z.AppImage

  Attention, pour pouvoir utiliser Marv, vous devez utiliser au minimum OBS 25.0.7, afin d'avoir le support des sources navigateur
  
  Pour être sûr d'avoir la dernière version, ajoutez le repository officiel suivant : sudo add-apt-repository ppa:obsproject/obs-studio
  (instruction d'installaiton ici : https://obsproject.com/wiki/install-instructions#linux )
  
  -----------------------------------------
