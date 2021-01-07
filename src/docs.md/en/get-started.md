# Get started

Before you start, you need to [download](/en/download) Marv and install it.

## Install the overlay in OBS

To be able to display your animations on your live you need to add a browser source in OBS with the address of Marv's overlay.

1. To add a browser source, open OBS, click on the plus button at the bottom left of the list of your scenes.
   ![OBS scene list](/assets/images/docs/obs_scene_list.png)

2. Create a new browser source and name it as you wish.
   ![OBS browser source](/assets/images/docs/obs_create_browser_source.png)

3. In the URL field, enter the following address: **http://localhost:4242/overlay**
   ![OBS browser source](/assets/images/docs/obs_browser_source_config.png)

4. Both boxes must also be checked:
   [✔] Disable the source when it is not visible.
   [✔] Refresh the browser when the scene becomes active.

## Install OBS Websocket

If you want to control OBS with Marv (scene change, mute, etc...), you need to install [OBS Websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/).

**Download**: [Windows](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-Windows-Installer.exe) | [Linux](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-1_amd64.deb) | [macOS](https://github.com/Palakis/obs-websocket/releases/download/4.8.0/obs-websocket-4.8.0-macOS.pkg)

## Recommendations

**Start Marv _before_ starting OBS.**

Otherwise, the following error message may appear.
![overlay not connected](/assets/images/docs/overlay_disconnected_message.png)

To reconnect the overlay, disable and re-enable source visibility.
![overlay not connected](/assets/images/docs/toggle_scene_visibility.png)

Translated with [DeepL](http://www.DeepL.com/Translator) (free version)
