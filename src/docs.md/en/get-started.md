# Quickstart

## Marv installation

### Windows:
You can download the lastest Marv version [here](https://github.com/skarab42/marv/releases/download/v1.7.0/Marv-Setup-1.7.0.exe).

Launch the setup program and follow the steps.



### Linux:

You can download the lastest Marv version [here](https://github.com/skarab42/marv/releases/download/v1.7.0/Marv-1.7.0.AppImage). Be careful, in order to use Marv, you must get at least OBS version 25.0.7 for your browser to be able to support the sources.  To be sure to have the latest version, add the following official repository: 

```bash
sudo add-apt-repository ppa:obsproject/obs-studio
```

(Detailed installation instructions [here](https://obsproject.com/wiki/install-instructions#linux)).


#### Command-line installation:

```bash
$  mkdir marv
$  mv Marv-x.y.z.AppImage marv
$  cd marv
$  chmod u+x Marv-x.y.z.AppImage
```

You can launch Marv from the command line:

```bash
./Marv-x.y.z.AppImage
```

#### graphical installation :

1. download the appimage ! [here](https://github.com/skarab42/marv/releases/download/v1.7.0/Marv-1.7.0.AppImage)
2. ideally, move the appimage to a dedicated folder
3. Right-click on the appimage -> properties -> permissions -> check “Allow executing file as program”
4. Left-click on the appimage to launch Marv


In order to create a desktop shortcut -> Right-click on your desktop -> Create a new launcher here -> Name it Marv and link it to the AppImage with the correct filepath.


## Overlay setup in OBS

To be able to display your animation live, you have to add a source in OBS that is the local address of the Marv overlay.

1. In order to add a browser source, start OBS, right mouse on the small plus sign (+) at the bottom left of your scene list.
   ![OBS scene list](/assets/images/docs/obs_scene_list.png)

2. Create a new browser source name it as you wish.
   ![OBS browser source](/assets/images/docs/obs_create_browser_source.png)

3. In the input URL field, enter the following address: **http://localhost:4242/overlay**
   ![OBS browser source](/assets/images/docs/obs_browser_source_config.png)

4. You also have to check two boxes:
   [✔] Shutdown source when not visible.
   [✔] Refresh browser source when scene becomes active.
   
5. Make sure you place the overlay correctly in your scene and note its dimensions. They will allow you to correctly set up your animations later.


## OBS Websocket setup

If you want to control OBS with Marv (scene change, mute, etc...), you must install [OBS Websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/).

**Download**: [Windows](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-Windows-Installer.exe) | [Linux](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-1_amd64.deb) | [macOS](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-macOS.pkg)

To configure the websocket plugin in obs : go to **tools** => **websocket server settings**.

If you did not define a password during the Websocket plugin installation, uncheck *enable authentication* in the websockets server settings.

## Guidelines

**Start Marv _before_  OBS.**

If not, you could get the following error message.
![overlay non connecter](/assets/images/docs/overlay_disconnected_message.png)

In order to rerun the overlay, hide the source and then make it visible again.
![overlay non connecter](/assets/images/docs/toggle_scene_visibility.png)


**Don't forget to connect Marv to Twitch

When you launch Marv, connect to your twitch account. This is essential to use some features (chat, commands, etc.).

![Marv Connection Twitch](/assets/images/docs/connection_twitch.png)
